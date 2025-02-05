import * as Slot from '@rn-primitives/slot'
import * as React from 'react'
import { Text } from 'react-native'
import type { DescriptionRef, DescriptionProps } from './types'
import { useRootContext } from './hooks/useRootContext'

const Description = React.forwardRef<DescriptionRef, DescriptionProps>(
  ({ asChild, ...props }, ref) => {
    const { nativeID } = useRootContext()
    const Component = asChild ? Slot.Text : Text
    return <Component ref={ref} nativeID={`${nativeID}_desc`} {...props} />
  },
)

Description.displayName = 'DescriptionNativeAlertDialog'

export { Description }
