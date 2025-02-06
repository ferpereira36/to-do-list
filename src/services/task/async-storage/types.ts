export type GetTaskResponse = {
  id: string
  isCompleted: boolean
  isAPI: boolean
  name: string
  description: string
}[]

export type CreateTaskParams = {
  name: string
  description: string
}

export type GetTaskByIdParams = {
  id: string | string[]
}

export type UpdateTaskStatusParams = {
  id: string
}

export type UpdateTaskParams = {
  id: string
  name: string
  description: string
  isCompleted: boolean
  isAPI: boolean
}

export type DeleteTaskParams = {
  id: string | undefined
}
