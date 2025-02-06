import React from 'react'
import { View, Text } from 'react-native'

interface Props {
  isCompleted: boolean
}

const BadgeStatus = ({ isCompleted }: Props) => {
  return (
    <View className="p-2 bg-white rounded-md border-black/40 border flex-1 w-full">
      <Text
        className={isCompleted ? 'text-green-500' : 'text-amber-500'}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {isCompleted ? 'Concluído' : 'Pendente'}
      </Text>
    </View>
  )
}

export { BadgeStatus }
