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

export type DeleteTaskParams = {
  id: string
}
