import { createMutation } from 'react-query-kit'

import { task } from '@/services/task'

export default function useDeleteTask() {
  const mutation = createMutation({
    mutationKey: ['delete-task'],
    mutationFn: task.delete,
  })

  return mutation()
}
