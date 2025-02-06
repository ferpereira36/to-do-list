import React from 'react'
import { View, Text } from 'react-native'
import { useRouter } from 'expo-router'
import { ChevronLeft, Info } from 'lucide-react-native'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import useCreateTask from './_hooks/use-create-task'
import taskSchema, { type TaskData } from './_schema'

export default function Content() {
  const { replace, back } = useRouter()

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<TaskData>({
    resolver: zodResolver(taskSchema),
  })

  const { mutate: handleCreateTask } = useCreateTask()

  const onSubmit: SubmitHandler<TaskData> = (data) => {
    handleCreateTask(
      {
        ...data,
      },
      {
        onSuccess: () => {
          replace('/')
        },
      },
    )
  }

  return (
    <>
      <View className="bg-white flex-1 p-4">
        <View className="flex-row items-center w-full">
          <Button
            variant="primary"
            className="w-12 h-12"
            onPress={() => back()}
          >
            <ChevronLeft color="white" />
          </Button>
          <Text className="text-xl font-semibold text-center flex-1">
            Adicionar Tarefa
          </Text>
          <View className="w-12 h-12 items-center justify-center">
            <Info size={28} color="gray" />
          </View>
        </View>

        <View className="gap-6 mt-8">
          <View>
            <Text>Nome</Text>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <Input
                  className="bg-white"
                  value={field.value}
                  onChangeText={field.onChange}
                  error={errors.name?.message}
                  editable={!isSubmitting}
                />
              )}
            />
          </View>

          <View>
            <Text>Descrição</Text>
            <Controller
              control={control}
              name="description"
              render={({ field }) => (
                <Textarea
                  className="bg-white"
                  value={field.value}
                  onChangeText={field.onChange}
                  error={errors.description?.message}
                  editable={!isSubmitting}
                />
              )}
            />
          </View>
        </View>

        <Button
          onPress={handleSubmit(onSubmit)}
          variant="primary"
          className="mt-6"
        >
          <Text className="text-white font-semibold">Criar tarefa</Text>
        </Button>
      </View>
    </>
  )
}
