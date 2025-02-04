import React from 'react'
import { cn } from '@/lib/rnr/utils'
import * as DropdownMenuPrimitive from '@rn-primitives/dropdown-menu'
import {
  Platform,
  type StyleProp,
  StyleSheet,
  type ViewStyle,
} from 'react-native'

const Content = React.forwardRef<
  DropdownMenuPrimitive.ContentRef,
  DropdownMenuPrimitive.ContentProps & {
    overlayStyle?: StyleProp<ViewStyle>
    overlayClassName?: string
    portalHost?: string
  }
>(
  (
    { className, overlayClassName, overlayStyle, portalHost, ...props },
    ref,
  ) => {
    const { open } = DropdownMenuPrimitive.useRootContext()
    return (
      <DropdownMenuPrimitive.Portal hostName={portalHost}>
        <DropdownMenuPrimitive.Overlay
          style={
            overlayStyle
              ? StyleSheet.flatten([
                  Platform.OS !== 'web' ? StyleSheet.absoluteFill : undefined,
                  overlayStyle,
                ])
              : Platform.OS !== 'web'
                ? StyleSheet.absoluteFill
                : undefined
          }
          className={overlayClassName}
        >
          <DropdownMenuPrimitive.Content
            ref={ref}
            className={cn(
              'z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-popover p-1 shadow-md shadow-foreground/5 web:data-[side=bottom]:slide-in-from-top-2 web:data-[side=left]:slide-in-from-right-2 web:data-[side=right]:slide-in-from-left-2 web:data-[side=top]:slide-in-from-bottom-2',
              open
                ? 'web:animate-in web:fade-in-0 web:zoom-in-95'
                : 'web:animate-out web:fade-out-0 web:zoom-out-95',
              className,
            )}
            {...props}
          />
        </DropdownMenuPrimitive.Overlay>
      </DropdownMenuPrimitive.Portal>
    )
  },
)
Content.displayName = DropdownMenuPrimitive.Content.displayName

export default Content
