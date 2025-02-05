import * as React from 'react'
import * as Slot from '@rn-primitives/slot'
import type { OverlayRef, OverlayProps } from './types'
import { useRootContext } from './hooks/useRootContext'
import { View } from 'react-native'

const Overlay = React.forwardRef<OverlayRef, OverlayProps>(
  ({ asChild, forceMount, ...props }, ref) => {
    const { open: value } = useRootContext()

    if (!forceMount) {
      if (!value) {
        return null
      }
    }

    const Component = asChild ? Slot.View : View
    return <Component ref={ref} {...props} />
  },
)

Overlay.displayName = 'OverlayNativeAlertDialog'

export { Overlay }
