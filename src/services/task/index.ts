import uuid from 'react-native-uuid'

import type {
  GetTaskResponse,
  CreateTaskParams,
  DeleteTaskParams,
  GetByIdTaskParams,
} from './types'

import { appStorage } from '@/services/async-storage/storage'

export const task = {
  async create(params: CreateTaskParams) {
    const currentTasks =
      (await appStorage.getItem<GetTaskResponse>('task')) || []

    const newTask = { id: uuid.v4(), isCompleted: false, ...params }
    const updatedTasks = [newTask, ...currentTasks]

    await appStorage.setItem('task', updatedTasks)

    return newTask
  },

  async get() {
    const data = (await appStorage.getItem<GetTaskResponse>('task')) || []
    return data
  },

  async getById(params: GetByIdTaskParams) {
    const data = (await appStorage.getItem<GetTaskResponse>('task')) || []

    const findTask = data.find((task) => task.id === params.id) || null

    return findTask
  },

  async delete(params: DeleteTaskParams) {
    const currentTasks =
      (await appStorage.getItem<GetTaskResponse>('task')) || []

    const updatedTasks =
      currentTasks.filter((item) => item.id !== params.id) || null

    await appStorage.setItem('task', updatedTasks)

    return updatedTasks
  },
}
