import React from 'react'
import { View } from 'react-native'
import { cn } from '@/lib/rnr/utils'
import { Check } from 'lucide-react-native'
import * as DropdownMenuPrimitive from '@rn-primitives/dropdown-menu'

const CheckboxItem = React.forwardRef<
  DropdownMenuPrimitive.CheckboxItemRef,
  DropdownMenuPrimitive.CheckboxItemProps
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      'relative flex flex-row web:cursor-default items-center web:group rounded-sm py-1.5 native:py-2 pl-8 pr-2 web:outline-none web:focus:bg-accent active:bg-accent',
      props.disabled && 'web:pointer-events-none opacity-50',
      className,
    )}
    checked={checked}
    {...props}
  >
    <View className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check size={14} strokeWidth={3} className="text-foreground" />
      </DropdownMenuPrimitive.ItemIndicator>
    </View>
    <>{children}</>
  </DropdownMenuPrimitive.CheckboxItem>
))
CheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

export default CheckboxItem
