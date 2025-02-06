import * as React from 'react'
import { View, Text, TextInput, type TextInputProps } from 'react-native'
import { cn } from '@/lib/rnr/utils'

interface TextareaProps extends TextInputProps {
  error?: string | undefined
}

const Textarea = React.forwardRef<
  React.ElementRef<typeof TextInput>,
  TextareaProps
>(
  (
    {
      className,
      error,
      multiline = true,
      numberOfLines = 4,
      placeholderClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <View>
        <TextInput
          ref={ref}
          data-error={!!error}
          className={cn(
            'web:flex min-h-[80px] w-full rounded-md border border-black/40 bg-white px-3 py-2 text-sm lg:text-sm native:text-lg native:leading-[1.25] web:ring-offset-background placeholder:text-muted-foreground web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
            props.editable === false && 'web:cursor-not-allowed',
            className,
          )}
          placeholderClassName={cn(
            'text-muted-foreground',
            placeholderClassName,
          )}
          multiline={multiline}
          numberOfLines={numberOfLines}
          textAlignVertical="top"
          {...props}
        />
        {error && <Text className="text-xs text-destructive">{error}</Text>}
      </View>
    )
  },
)

Textarea.displayName = 'Textarea'

export { Textarea }
