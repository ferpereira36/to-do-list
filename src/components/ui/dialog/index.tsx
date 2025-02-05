import React from 'react'
import { Text, View } from 'react-native'
import { Trash } from 'lucide-react-native'
import * as DialogPrimitive from '@rn-primitives/dialog'

export default function Dialog() {
  return (
    <>
      <DialogPrimitive.Root>
        <DialogPrimitive.Trigger className="min-w-32 bg-cyan-600">
          <View className="flex-row items-center h-full">
            <Trash color={'black'} size={20} />
            <Text className="">Excluir</Text>
          </View>
        </DialogPrimitive.Trigger>

        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="bg-black/10 w-full h-full">
            <DialogPrimitive.Content>
              <DialogPrimitive.Title>Dialog Title</DialogPrimitive.Title>
              <DialogPrimitive.Description>
                Dialog description.
              </DialogPrimitive.Description>
              <DialogPrimitive.Close>
                <Text>Close</Text>
              </DialogPrimitive.Close>
            </DialogPrimitive.Content>
          </DialogPrimitive.Overlay>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  )
}
