import * as Slot from '@rn-primitives/slot'
import * as React from 'react'
import { Pressable, type GestureResponderEvent } from 'react-native'
import type { TriggerProps, TriggerRef } from './types'
import { useRootContext } from './hooks/useRootContext'

const Trigger = React.forwardRef<TriggerRef, TriggerProps>(
  ({ asChild, onPress: onPressProp, disabled = false, ...props }, ref) => {
    const { open: value, onOpenChange } = useRootContext()

    function onPress(ev: GestureResponderEvent) {
      onOpenChange(!value)
      onPressProp?.(ev)
    }

    const Component = asChild ? Slot.Pressable : Pressable
    return (
      <Component
        ref={ref}
        aria-disabled={disabled ?? undefined}
        role="button"
        onPress={onPress}
        disabled={disabled ?? undefined}
        {...props}
      />
    )
  },
)

Trigger.displayName = 'TriggerNativeAlertDialog'

export { Trigger }
