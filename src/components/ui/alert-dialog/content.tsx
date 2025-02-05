import * as Slot from '@rn-primitives/slot'
import * as React from 'react'
import { useEffect } from 'react'
import { BackHandler, View } from 'react-native'
import type { ContentRef, ContentProps } from './types'
import { useRootContext } from './hooks/useRootContext'

const Content = React.forwardRef<ContentRef, ContentProps>(
  ({ asChild, forceMount, ...props }, ref) => {
    const { open: value, nativeID, onOpenChange } = useRootContext()

    useEffect(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          onOpenChange(false)
          return true
        },
      )

      return () => {
        backHandler.remove()
      }
    }, [onOpenChange])

    if (!forceMount) {
      if (!value) {
        return null
      }
    }

    const Component = asChild ? Slot.View : View
    return (
      <Component
        ref={ref}
        role="alertdialog"
        nativeID={nativeID}
        aria-labelledby={`${nativeID}_label`}
        aria-describedby={`${nativeID}_desc`}
        aria-modal={true}
        {...props}
      />
    )
  },
)

Content.displayName = 'ContentNativeAlertDialog'

export { Content }
