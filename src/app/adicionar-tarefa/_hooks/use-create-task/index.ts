import { createMutation } from 'react-query-kit'

import { task } from '@/services/task/async-storage'

export default function useCreateTask() {
  const mutation = createMutation({
    mutationKey: ['create-task'],
    mutationFn: task.create,
  })

  return mutation()
}
