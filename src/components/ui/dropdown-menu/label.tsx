import React from 'react'
import { cn } from '@/lib/rnr/utils'
import * as DropdownMenuPrimitive from '@rn-primitives/dropdown-menu'

const Label = React.forwardRef<
  DropdownMenuPrimitive.LabelRef,
  DropdownMenuPrimitive.LabelProps & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      'px-2 py-1.5 text-sm native:text-base font-semibold text-foreground web:cursor-default',
      inset && 'pl-8',
      className,
    )}
    {...props}
  />
))
Label.displayName = DropdownMenuPrimitive.Label.displayName

export default Label
