import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import { Plus, EllipsisVertical, LayoutGrid, Trash } from 'lucide-react-native'

import { Button } from '@/components/ui/button'
import { Dropdown } from '@/components/ui/dropdown-menu'

import { useGetTasks } from './_hooks/use-get-tasks'
import { useDeleteTask } from './_hooks/use-delete-task'

export default function Home() {
  const { push } = useRouter()
  const { data: tasks, refetch } = useGetTasks()
  const { mutate: handleDeleteTask } = useDeleteTask()

  return (
    <View className="bg-white flex-1 px-4">
      <View>
        <Text className="text-center text-xl font-semibold">To Do List</Text>
        <Button
          variant="primary"
          className="mt-5 self-end flex-row items-center gap-2"
          onPress={() => push('/adicionar-tarefa')}
        >
          <Plus color="white" size={20} />
          <Text className="text-white font-semibold">Nova tarefa</Text>
        </Button>

        {!tasks || tasks.length === 0 ? (
          <View className="mt-8">
            <Text className="text-center">Nenhuma tarefa encontrada</Text>
          </View>
        ) : (
          <View className="gap-4 mt-5 overflow-y-scroll">
            {tasks.map((item, index) => (
              <View key={index}>
                <View className="rounded-md h-24 p-3 border-black/10 border text- border-l-4 border-l-purple-600 justify-between items-center flex-row">
                  <View className="gap-3">
                    <Text>{item.name}</Text>
                    {item.isCompleted ? (
                      <Text className="text-green-500">Concluído</Text>
                    ) : (
                      <Text className="text-amber-500">Pendente</Text>
                    )}
                  </View>
                  <Dropdown.Root>
                    <Dropdown.Trigger asChild>
                      <Button variant="ghost" size="icon">
                        <EllipsisVertical color="gray" />
                      </Button>
                    </Dropdown.Trigger>

                    <Dropdown.Content className="gap-1 -ml-12">
                      <Dropdown.Item asChild>
                        <View className="pr-6">
                          <LayoutGrid color={'black'} size={20} />
                          <Text>Detalhes</Text>
                        </View>
                      </Dropdown.Item>

                      <Dropdown.Item asChild>
                        <TouchableOpacity
                          onPress={() =>
                            handleDeleteTask(
                              { id: item.id },
                              {
                                onSuccess: () => {
                                  refetch()
                                },
                              },
                            )
                          }
                        >
                          <Trash color={'black'} size={20} />
                          <Text>Excluir</Text>
                        </TouchableOpacity>
                      </Dropdown.Item>
                    </Dropdown.Content>
                  </Dropdown.Root>
                </View>
              </View>
            ))}
          </View>
        )}
      </View>
    </View>
  )
}
