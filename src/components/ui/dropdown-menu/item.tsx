import React from 'react'
import { cn } from '@/lib/rnr/utils'
import * as DropdownMenuPrimitive from '@rn-primitives/dropdown-menu'
import { TextClassContext } from '@/components/ui/text'

const Item = React.forwardRef<
  DropdownMenuPrimitive.ItemRef,
  DropdownMenuPrimitive.ItemProps & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <TextClassContext.Provider value="select-none text-sm native:text-lg text-popover-foreground web:group-focus:text-accent-foreground">
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(
        'relative flex flex-row web:cursor-default gap-2 items-center rounded-sm px-2 py-1.5 native:py-2 web:outline-none web:focus:bg-accent active:bg-accent web:hover:bg-accent group',
        inset && 'pl-8',
        props.disabled && 'opacity-50 web:pointer-events-none',
        className,
      )}
      {...props}
    />
  </TextClassContext.Provider>
))
Item.displayName = DropdownMenuPrimitive.Item.displayName

export default Item
