import * as DropdownMenuPrimitive from '@rn-primitives/dropdown-menu'
import * as React from 'react'
import { Platform } from 'react-native'
import { cn } from '@/lib/rnr/utils'
import { TextClassContext } from '@/components/ui/text'

import { ChevronDown, ChevronRight, ChevronUp } from 'lucide-react-native'

const SubTrigger = React.forwardRef<
  DropdownMenuPrimitive.SubTriggerRef,
  DropdownMenuPrimitive.SubTriggerProps & {
    inset?: boolean
  }
>(({ className, inset, children, ...props }, ref) => {
  const { open } = DropdownMenuPrimitive.useSubContext()
  const Icon =
    Platform.OS === 'web' ? ChevronRight : open ? ChevronUp : ChevronDown
  return (
    <TextClassContext.Provider
      value={cn(
        'select-none text-sm native:text-lg text-primary',
        open && 'native:text-accent-foreground',
      )}
    >
      <DropdownMenuPrimitive.SubTrigger
        ref={ref}
        className={cn(
          'flex flex-row web:cursor-default web:select-none gap-2 items-center web:focus:bg-accent web:hover:bg-accent active:bg-accent rounded-sm px-2 py-1.5 native:py-2 web:outline-none',
          open && 'bg-accent',
          inset && 'pl-8',
          className,
        )}
        {...props}
      >
        <>{children}</>
        <Icon size={18} className="ml-auto text-foreground" />
      </DropdownMenuPrimitive.SubTrigger>
    </TextClassContext.Provider>
  )
})
SubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

export default SubTrigger
