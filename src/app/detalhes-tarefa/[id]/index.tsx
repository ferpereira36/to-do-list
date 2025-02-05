import React from 'react'
import { View, Text } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { ChevronLeft, Info } from 'lucide-react-native'

import { Button } from '@/components/ui/button'

import { useGetTaskById } from './_hooks/use-get-task-by-id'

export default function Content() {
  const { id } = useLocalSearchParams()
  const { back } = useRouter()
  const { data: task } = useGetTaskById({ id })

  if (!task) {
    back()
  }

  return (
    <>
      <View className="bg-white flex-1 px-4">
        <View className="flex-row items-center w-full">
          <Button
            variant="primary"
            className="w-12 h-12"
            onPress={() => back()}
          >
            <ChevronLeft color="white" />
          </Button>
          <Text className="text-xl font-semibold text-center flex-1">
            Detalhes da tarefa
          </Text>
          <View className="w-12 h-12 items-center justify-center">
            <Info size={28} color="gray" />
          </View>
        </View>

        <View className="mt-8">
          <Text>Nome da tarefa: {task?.name}</Text>
        </View>
      </View>
    </>
  )
}
