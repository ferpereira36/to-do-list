import { createQuery } from 'react-query-kit'

import { task } from '@/services/task'

export default function useGetTasks() {
  const query = createQuery({
    queryKey: ['get-tasks'],
    fetcher: task.get,
    keepPreviousData: true,
  })

  const queryResponse = query()

  return {
    ...queryResponse,
  }
}
