export type GetTaskResponse = {
  userId: string
  id: string
  title: string
  completed: boolean
}[]

export type GetTaskByApi = {
  userId: string
  id: string
  name: string
  isCompleted: boolean
  isAPI: boolean
}[]
