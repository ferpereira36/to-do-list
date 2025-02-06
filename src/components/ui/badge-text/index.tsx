import React from 'react'
import { View, Text } from 'react-native'

interface Props {
  title: string
  content: string
}

const BadgeText = ({ title, content }: Props) => {
  return (
    <View className="flex-row gap-1">
      <View className="rounded-md bg-purple-300 border-black/10 border px-4 py-2">
        <Text className="font-semibold">{title}</Text>
      </View>
      <View className="p-2 bg-white rounded-md border-black/10 border flex-1 w-full">
        <Text numberOfLines={1} ellipsizeMode="tail">
          {content}
        </Text>
      </View>
    </View>
  )
}

export { BadgeText }
