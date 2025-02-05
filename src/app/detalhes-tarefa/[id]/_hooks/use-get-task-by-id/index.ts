import { createQuery } from 'react-query-kit'

import { task } from '@/services/task'

type IProps = {
  id: string | string[]
}

export function useGetTaskById(props: IProps) {
  const { id } = props

  const query = createQuery({
    queryKey: ['get-tasks-by-id'],
    fetcher: task.getById,
    keepPreviousData: true,
  })

  const queryResponse = query({ variables: { id } })

  return {
    ...queryResponse,
  }
}
