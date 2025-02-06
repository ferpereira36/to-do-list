export type GetTaskResponse = {
  id: string
  isCompleted: boolean
  name: string
  description: string
}[]

export type CreateTaskParams = {
  name: string
  description: string
}

export type GetByIdTaskParams = {
  id: string | string[]
}

export type UpdateStatusTaskParams = {
  id: string
}

export type UpdateTaskParams = {
  id: string
  name: string
  description: string
  isCompleted: boolean
}

export type DeleteTaskParams = {
  id: string | undefined
}
