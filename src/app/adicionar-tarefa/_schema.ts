import { z } from 'zod'

export const taskSchema = z.object({
  name: z
    .string({ message: 'Insira o nome da tarefa' })
    .min(1, 'Insira o nome da tarefa'),
  description: z
    .string({ message: 'Insira a descrição da tarefa' })
    .min(1, 'Insira a descrição da tarefa'),
})

export type TaskData = z.infer<typeof taskSchema>
