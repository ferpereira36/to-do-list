import { useControllableState } from '@rn-primitives/hooks'
import * as Slot from '@rn-primitives/slot'
import * as React from 'react'
import { useId } from 'react'
import { View } from 'react-native'
import type { RootProps, RootRef } from './types'
import { AlertDialogContext } from './context'

const Root = React.forwardRef<RootRef, RootProps>(
  (
    {
      asChild,
      open: openProp,
      defaultOpen,
      onOpenChange: onOpenChangeProp,
      ...viewProps
    },
    ref,
  ) => {
    const nativeID = useId()
    const [open = false, onOpenChange] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen,
      onChange: onOpenChangeProp,
    })
    const Component = asChild ? Slot.View : View
    return (
      <AlertDialogContext.Provider
        value={{
          open,
          onOpenChange,
          nativeID,
        }}
      >
        <Component ref={ref} {...viewProps} />
      </AlertDialogContext.Provider>
    )
  },
)

Root.displayName = 'RootNativeAlertDialog'

export { Root }
