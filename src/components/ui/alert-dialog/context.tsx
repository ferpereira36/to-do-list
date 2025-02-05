import { createContext } from 'react'
import type { RootContext } from './types'

const AlertDialogContext = createContext<
  (RootContext & { nativeID: string }) | null
>(null)

export { AlertDialogContext }
