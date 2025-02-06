import { createMutation } from 'react-query-kit'

import { task } from '@/services/task/async-storage'

export default function useUpdateStatusTask() {
  const mutation = createMutation({
    mutationKey: ['update-status-task'],
    mutationFn: task.updateStatusTask,
  })

  return mutation()
}
