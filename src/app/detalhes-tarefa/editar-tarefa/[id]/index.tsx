import React, { useEffect } from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native'
import { useRouter, useLocalSearchParams } from 'expo-router'
import { ChevronLeft } from 'lucide-react-native'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import useUpdateTask from '../_hooks/use-update-task'
import useGetTaskById from '../../_hooks/use-get-task-by-id'
import taskSchema, { type TaskData } from './_schema'

export default function Content() {
  const { replace, back } = useRouter()
  const { id } = useLocalSearchParams()
  const { data: task, isLoading } = useGetTaskById({ id })
  const { mutate: handleUpdateTask } = useUpdateTask()

  useEffect(() => {
    if (!isLoading && !task) {
      back()
    }
  }, [isLoading, task, back])

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<TaskData>({
    resolver: zodResolver(taskSchema),
  })

  const handleDefaultValues = () => {
    if (!task) {
      return
    }

    const { name, description } = task

    reset({ name, description })
  }

  useEffect(handleDefaultValues, [task, reset])

  const onSubmit: SubmitHandler<TaskData> = (data) => {
    if (!task?.id) return

    const updatedData = {
      id: task.id,
      isCompleted: task?.isCompleted,
      isAPI: task?.isAPI,
      ...data,
    }

    handleUpdateTask(updatedData, {
      onSuccess: () => {
        replace('/')
      },
    })
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className="flex-1 bg-white p-4"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View className="flex-1">
          <View className="flex-row items-center w-full">
            <Button
              variant="primary"
              className="w-12 h-12"
              onPress={() => back()}
            >
              <ChevronLeft color="white" />
            </Button>
            <Text className="text-xl font-semibold text-center flex-1">
              Editar tarefa
            </Text>
            <View className="w-12 h-12 items-center justify-center" />
          </View>

          <View className="gap-6 mt-8">
            <View>
              <Text>Nome</Text>
              <Controller
                control={control}
                name="name"
                render={({ field }) => (
                  <Input
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
            className="mt-8"
            disabled={isSubmitting}
          >
            <Text className="text-white font-semibold">Salvar</Text>
          </Button>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
