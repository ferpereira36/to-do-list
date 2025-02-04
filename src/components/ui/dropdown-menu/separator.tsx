import React from 'react'
import { cn } from '@/lib/rnr/utils'
import * as DropdownMenuPrimitive from '@rn-primitives/dropdown-menu'

const Separator = React.forwardRef<
  DropdownMenuPrimitive.SeparatorRef,
  DropdownMenuPrimitive.SeparatorProps
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-border', className)}
    {...props}
  />
))
Separator.displayName = DropdownMenuPrimitive.Separator.displayName

export default Separator
