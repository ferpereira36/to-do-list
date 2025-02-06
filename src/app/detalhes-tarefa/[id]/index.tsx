import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { useLocalSearchParams, useRouter, Link } from 'expo-router'
import { ChevronLeft, Pen } from 'lucide-react-native'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { BadgeText } from '@/components/ui/badge-text'
import { BadgeStatus } from '@/components/ui/badge-status'
import { Dialog } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'

import useGetTaskById from '../_hooks/use-get-task-by-id'
import useDeleteTask from '../_hooks/use-delete-task'
import useUpdateStatusTask from '../_hooks/use-update-status-task'

export default function Content() {
  const { id } = useLocalSearchParams()
  const { back, replace } = useRouter()
  const { data: task, isLoading } = useGetTaskById({ id })
  const { mutate: handleStatusTask } = useUpdateStatusTask()
  const { mutate: handleDeleteTask } = useDeleteTask()

  const [dialogStatusVisible, setDialogStatusVisible] = useState(false)
  const [dialogDeleteVisible, setDialogDeleteVisible] = useState(false)

  useEffect(() => {
    if (!isLoading && !task) {
      back()
    }
  }, [isLoading, task, back])

  if (isLoading)
    return (
      <View className="flex-1 h-full justify-center items-center bg-white">
        <ActivityIndicator color="gray" />
      </View>
    )

  if (!task) return null

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
            Detalhes da tarefa
          </Text>

          <Link
            href={{
              pathname: '/detalhes-tarefa/editar-tarefa/[id]',
              params: { id: task.id },
            }}
            asChild
          >
            <Button variant="primary" size="icon" className="w-12 h-12">
              <Pen color="white" size={20} />
            </Button>
          </Link>
        </View>

        <View className="gap-4 mt-8">
          <View className="gap-1 flex-row">
            <Badge>
              <Text className="text-center">Nome</Text>
            </Badge>
            <BadgeText>{task.name}</BadgeText>
          </View>
          <View className="gap-1 flex-row">
            <Badge>
              <Text className="text-center">Status</Text>
            </Badge>
            <BadgeStatus isCompleted={task.isCompleted} />
          </View>
          <View className="gap-1">
            <Badge>
              <Text className="text-center">Descrição</Text>
            </Badge>
            <Textarea editable={false}>{task.description}</Textarea>
          </View>
        </View>

        <View className="gap-4 mt-8">
          <Button
            onPress={() => setDialogStatusVisible(true)}
            variant={task.isCompleted ? 'inProgress' : 'completed'}
          >
            <Text className="text-white font-semibold">
              {task.isCompleted ? 'Reabrir tarefa' : 'Concluir tarefa'}
            </Text>
          </Button>

          <Button
            onPress={() => setDialogDeleteVisible(true)}
            variant="destructive"
          >
            <Text className="text-white font-semibold">Excluir tarefa</Text>
          </Button>
        </View>
      </View>

      <Dialog
        visible={dialogStatusVisible}
        title="Alteração de status"
        description="Você está prestes a alterar o status dessa tarefa. Deseja realmente continuar?"
        onCancel={() => setDialogStatusVisible(false)}
        variantConfirm={task.isCompleted ? 'inProgress' : 'completed'}
        textConfirm={task.isCompleted ? 'Alterar' : 'Concluir'}
        onConfirm={() =>
          handleStatusTask(
            { id: task.id },
            {
              onSuccess: () => {
                replace('/')
              },
            },
          )
        }
      />

      <Dialog
        visible={dialogDeleteVisible}
        title="Exclusão de tarefa"
        description="Você está prestes a excluir uma tarefa da sua lista. Deseja realmente continuar?"
        onCancel={() => setDialogDeleteVisible(false)}
        variantConfirm="destructive"
        textConfirm="Excluir"
        onConfirm={() =>
          handleDeleteTask(
            { id: task.id },
            {
              onSuccess: () => {
                replace('/')
              },
            },
          )
        }
      />
    </>
  )
}
