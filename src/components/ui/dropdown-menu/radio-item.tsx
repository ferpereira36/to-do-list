import React from 'react'
import { View } from 'react-native'
import { cn } from '@/lib/rnr/utils'
import * as DropdownMenuPrimitive from '@rn-primitives/dropdown-menu'

const RadioItem = React.forwardRef<
  DropdownMenuPrimitive.RadioItemRef,
  DropdownMenuPrimitive.RadioItemProps
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      'relative flex flex-row web:cursor-default web:group items-center rounded-sm py-1.5 native:py-2 pl-8 pr-2 web:outline-none web:focus:bg-accent active:bg-accent',
      props.disabled && 'web:pointer-events-none opacity-50',
      className,
    )}
    {...props}
  >
    <View className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <View className="bg-foreground h-2 w-2 rounded-full" />
      </DropdownMenuPrimitive.ItemIndicator>
    </View>
    <>{children}</>
  </DropdownMenuPrimitive.RadioItem>
))
RadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

export default RadioItem
