import { z } from 'zod'

const taskSchema = z.object({
  id: z.string(),
  isCompleted: z.boolean(),
  name: z
    .string({ message: 'Insira o nome da tarefa' })
    .min(1, 'Insira o nome da tarefa'),
  description: z
    .string({ message: 'Insira a descrição da tarefa' })
    .min(1, 'Insira a descrição da tarefa'),
})

type TaskData = z.infer<typeof taskSchema>

export default taskSchema
export { TaskData }
