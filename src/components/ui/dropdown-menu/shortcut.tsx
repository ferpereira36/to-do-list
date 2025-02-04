import React from 'react'
import { Text, type TextProps } from 'react-native'
import { cn } from '@/lib/rnr/utils'

const Shortcut = ({ className, ...props }: TextProps) => {
  return (
    <Text
      className={cn(
        'ml-auto text-xs native:text-sm tracking-widest text-muted-foreground',
        className,
      )}
      {...props}
    />
  )
}
Shortcut.displayName = 'DropdownMenuShortcut'

export default Shortcut
