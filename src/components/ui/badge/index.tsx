import React, { PropsWithChildren } from 'react'
import { View, Text } from 'react-native'

const Badge = ({ children }: PropsWithChildren) => {
  return (
    <View className="rounded-md bg-purple-300 border-black/20 border px-4 py-2">
      <Text className="font-semibold">{children}</Text>
    </View>
  )
}

export { Badge }
