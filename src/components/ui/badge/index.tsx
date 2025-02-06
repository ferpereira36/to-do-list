import React, { ReactNode } from 'react'
import { View, Text } from 'react-native'

interface Props {
  text: string
  children: ReactNode
}

const Badge = ({ text, children }: Props) => {
  return (
    <View className="flex-row gap-1">
      <View className="rounded-md bg-purple-300 border-black/10 border px-4 py-2">
        <Text className="font-semibold">{text}</Text>
      </View>
      <View className="flex-1 w-full">{children}</View>
    </View>
  )
}

export { Badge }
