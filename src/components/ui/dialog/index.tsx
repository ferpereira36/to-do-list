import React from 'react'
import { View, Text, Modal } from 'react-native'

import { Button } from '@/components/ui/button'

interface DialogProps {
  visible: boolean
  title: string
  description: string
  onCancel: () => void
  onConfirm: () => void
  variantConfirm: 'destructive' | 'inProgress' | 'completed'
  textConfirm: string
}

const Dialog = ({
  visible,
  title,
  description,
  onCancel,
  onConfirm,
  variantConfirm,
  textConfirm,
}: DialogProps) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View className="flex-1 justify-center items-center bg-black/80">
        <View className="bg-white w-80 p-4 rounded-md">
          <Text className="text-lg font-semibold mb-2">{title}</Text>

          <Text className="text-gray-600 mb-4">{description}</Text>

          <View className="flex-row justify-end gap-4 mt-4">
            <Button variant="ghost" onPress={onCancel}>
              <Text className="font-medium">Cancelar</Text>
            </Button>
            <Button variant={variantConfirm} onPress={onConfirm}>
              <Text className="text-white font-medium">{textConfirm}</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export { Dialog }
