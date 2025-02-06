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
import { useRouter, useFocusEffect, Link } from 'expo-router'
import { Plus, EllipsisVertical } from 'lucide-react-native'

import { Button } from '@/components/ui/button'
import { SearchText } from '@/components/ui/search-text'

import useGetTasks from './_hooks/use-get-tasks'
import normalize from '@/utils/normalize'

export default function Home() {
  const { push } = useRouter()
  const { data: tasks, isLoading, refetch } = useGetTasks()
  const [search, setSearch] = useState('')

  const filteredData = tasks?.filter((item) =>
    normalize(item.name).includes(normalize(search)),
  )

  useFocusEffect(() => {
    refetch()
  })

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
      className="bg-white p-4"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View className="flex-1">
          <Text className="text-center text-xl font-semibold">To Do List</Text>
          <Button
            variant="primary"
            className="mt-5 self-end flex-row items-center gap-2"
            onPress={() => push('/adicionar-tarefa')}
          >
            <Plus color="white" size={20} />
            <Text className="text-white font-semibold">Nova tarefa</Text>
          </Button>

          {isLoading && (
            <View className="justify-center items-center">
              <ActivityIndicator color="gray" />
            </View>
          )}

          {!isLoading && (
            <>
              <TextInput
                className="h-12 mt-5 bg-white rounded-md border-black/40 border px-2"
                placeholder="Pesquisar.."
                onChangeText={(text) => setSearch(text)}
              />

              {filteredData?.length === 0 ? (
                <View className="mt-8">
                  <Text className="text-center">Nenhuma tarefa encontrada</Text>
                </View>
              ) : (
                <ScrollView className="gap-4 mt-5">
                  {filteredData?.map((item) => (
                    <View key={item.id}>
                      <View className="rounded-md h-24 p-3 border-black/10 border text- border-l-4 border-l-purple-600 justify-between items-center flex-row">
                        <View className="gap-3">
                          <Text>
                            <SearchText text={item.name} search={search} />
                          </Text>
                          {item.isCompleted ? (
                            <Text className="text-green-500">Concluído</Text>
                          ) : (
                            <Text className="text-amber-500">Pendente</Text>
                          )}
                        </View>
                        <Link
                          href={{
                            pathname: '/detalhes-tarefa/[id]',
                            params: { id: item.id },
                          }}
                          asChild
                        >
                          <Button variant="ghost" size="icon">
                            <EllipsisVertical color="gray" />
                          </Button>
                        </Link>
                      </View>
                    </View>
                  ))}
                </ScrollView>
              )}
            </>
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
