import * as Slot from '@rn-primitives/slot'
import * as React from 'react'
import { Pressable, type GestureResponderEvent } from 'react-native'
import type { ActionRef, ActionProps } from './types'
import { useRootContext } from './hooks/useRootContext'

const Action = React.forwardRef<ActionRef, ActionProps>(
  ({ asChild, onPress: onPressProp, disabled = false, ...props }, ref) => {
    const { onOpenChange } = useRootContext()

    function onPress(ev: GestureResponderEvent) {
      if (disabled) return
      onOpenChange(false)
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

Action.displayName = 'ActionNativeAlertDialog'

export { Action }
