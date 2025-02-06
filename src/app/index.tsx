import React, { useState } from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ScrollView,
} from 'react-native'
import { useRouter } from 'expo-router'
import { Plus, EllipsisVertical } from 'lucide-react-native'

import { Button } from '@/components/ui/button'
import { SearchText } from '@/components/ui/search-text'

import normalize from '@/utils/normalize'

import useGetTasks from './_hooks/use-get-tasks'
import useGetTasksByAPI from './_hooks/use-get-tasks-by-api'

export default function Home() {
  const { push } = useRouter()
  const { data: tasks, isLoading } = useGetTasks()
  const { data: tasksAPI, isLoading: isLoadingAPI } = useGetTasksByAPI()
  const [search, setSearch] = useState('')

  const mergeTasks = [...(tasks ?? []), ...(tasksAPI ?? [])]

  const filteredData = mergeTasks?.filter((item) =>
    normalize(item.name).includes(normalize(search)),
  )

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className="flex-1 bg-white p-4"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View className="flex-1">
          <Text className="text-center text-xl font-semibold">
            Minhas tarefas
          </Text>
          <Button
            variant="primary"
            className="mt-5 self-end flex-row items-center gap-2"
            onPress={() => push('/adicionar-tarefa')}
          >
            <Plus color="white" size={20} />
            <Text className="text-white font-semibold">Nova tarefa</Text>
          </Button>

          {isLoading ||
            (isLoadingAPI && (
              <View className="flex-1 h-full justify-center items-center bg-white">
                <ActivityIndicator color="gray" />
              </View>
            ))}

          {!isLoading && !isLoadingAPI && (
            <>
              <TextInput
                className="h-12 mt-5 bg-gray-50 rounded-md border-black/40 border px-2"
                placeholder="Pesquisar..."
                placeholderTextColor="gray"
                onChangeText={(text) => setSearch(text)}
              />

              {filteredData?.length === 0 ? (
                <View className="mt-8">
                  <Text className="text-center">Nenhuma tarefa encontrada</Text>
                </View>
              ) : (
                <ScrollView className="mt-6">
                  <View className="gap-4">
                    {filteredData?.map((item) => (
                      <View key={item.id}>
                        <View className="rounded-md h-24 p-3 border-black/20 border text- border-l-4 border-l-purple-600 justify-between items-center flex-row">
                          <View className="gap-3 flex-1">
                            <Text className="line-clamp-1">
                              <SearchText text={item.name} search={search} />
                            </Text>
                            {item.isCompleted ? (
                              <Text className="text-green-500">Concluído</Text>
                            ) : (
                              <Text className="text-amber-500">Pendente</Text>
                            )}
                          </View>

                          <Button
                            variant="ghost"
                            size="icon"
                            disabled={item.isAPI}
                            onPress={() => {
                              push({
                                pathname: '/detalhes-tarefa/[id]',
                                params: { id: item.id },
                              })
                            }}
                          >
                            <EllipsisVertical color="gray" />
                          </Button>
                        </View>
                      </View>
                    ))}
                  </View>
                </ScrollView>
              )}
            </>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
