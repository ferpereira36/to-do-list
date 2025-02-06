import axios from '@/lib/axios'

import type { GetTaskResponse, GetTaskByApi } from './types'

export const task = {
  async getTask() {
    const { data } = await axios.get<GetTaskResponse>(
      'https://jsonplaceholder.typicode.com/todos?_limit=10',
    )

    const normalizedData: GetTaskByApi = data.map((task) => ({
      ...task,
      name: task.title,
      isCompleted: task.completed,
      isAPI: true,
    }))

    return normalizedData
  },
}
