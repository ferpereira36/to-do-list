import { useContext } from 'react'
import { AlertDialogContext } from '../../context'

function useRootContext() {
  const context = useContext(AlertDialogContext)
  if (!context) {
    throw new Error(
      'AlertDialog compound components cannot be rendered outside the AlertDialog component',
    )
  }
  return context
}

export { useRootContext }
