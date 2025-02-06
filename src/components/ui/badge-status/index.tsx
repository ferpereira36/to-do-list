import React from 'react'
import { View, Text } from 'react-native'

interface Props {
  title: string
  isCompleted: boolean
}

const BadgeStatus = ({ title, isCompleted }: Props) => {
  return (
    <View className="flex-row gap-1">
      <View className="rounded-md bg-purple-300 border-black/10 border px-4 py-2">
        <Text className="font-semibold">{title}</Text>
      </View>
      <View className="p-2 bg-white rounded-md border-black/10 border flex-1 w-full">
        <Text
          className={isCompleted ? 'text-green-500' : 'text-amber-500'}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {isCompleted ? 'Concluído' : 'Pendente'}
        </Text>
      </View>
    </View>
  )
}

export { BadgeStatus }
