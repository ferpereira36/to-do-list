import React, { PropsWithChildren } from 'react'
import { View, Text } from 'react-native'

const BadgeText = ({ children }: PropsWithChildren) => {
  return (
    <View className="p-2 bg-white rounded-md border-black/40 border flex-1 w-full">
      <Text numberOfLines={1} ellipsizeMode="tail">
        {children}
      </Text>
    </View>
  )
}

export { BadgeText }
