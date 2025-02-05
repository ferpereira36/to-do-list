import * as Slot from '@rn-primitives/slot'
import * as React from 'react'
import { Text } from 'react-native'
import type { TitleProps, TitleRef } from './types'
import { useRootContext } from './hooks/useRootContext'

const Title = React.forwardRef<TitleRef, TitleProps>(
  ({ asChild, ...props }, ref) => {
    const { nativeID } = useRootContext()
    const Component = asChild ? Slot.Text : Text
    return (
      <Component
        ref={ref}
        role="heading"
        nativeID={`${nativeID}_label`}
        {...props}
      />
    )
  },
)

Title.displayName = 'TitleNativeAlertDialog'

export { Title }
