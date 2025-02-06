import { createQuery } from 'react-query-kit'

import { task } from '@/services/task/api'

export default function useGetTasksByAPI() {
  const query = createQuery({
    queryKey: ['get-tasks-by-api'],
    fetcher: task.getTask,
    keepPreviousData: true,
  })

  const queryResponse = query()

  return {
    ...queryResponse,
  }
}
