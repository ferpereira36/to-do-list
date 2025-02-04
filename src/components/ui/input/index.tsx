import * as React from 'react'
import { View, Text, TextInput, type TextInputProps } from 'react-native'
import { cn } from '@/lib/rnr/utils'

interface InputProps extends TextInputProps {
  error: string | undefined
}

const Input = React.forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, error, placeholderClassName, ...props }, ref) => {
    return (
      <View>
        <TextInput
          ref={ref}
          data-error={!!error}
          className={cn(
            'web:flex h-10 native:h-12 web:w-full rounded-md border border-input bg-background px-3 web:py-2 text-base lg:text-sm native:text-lg native:leading-[1.25] placeholder:text-muted-foreground web:ring-offset-background file:border-0 file:bg-transparent file:font-medium web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
            props.editable === false && 'opacity-50 web:cursor-not-allowed',
            className,
          )}
          placeholderClassName={cn(
            'text-muted-foreground',
            placeholderClassName,
          )}
          {...props}
        />
        {error && <Text className="text-xs text-destructive">{error}</Text>}
      </View>
    )
  },
)

Input.displayName = 'Input'

export { Input }
