import { createMutation } from 'react-query-kit'

import { task } from '@/services/task/async-storage'

export default function useUpdateTask() {
  const mutation = createMutation({
    mutationKey: ['update-task'],
    mutationFn: task.updateTask,
  })

  return mutation()
}
