import type { PortalProps } from './types'
import { Portal as RNPPortal } from '@rn-primitives/portal'
import { useRootContext } from './hooks/useRootContext'
import { AlertDialogContext } from './context'

function Portal({ forceMount, hostName, children }: PortalProps) {
  const value = useRootContext()

  if (!forceMount) {
    if (!value.open) {
      return null
    }
  }

  return (
    <RNPPortal hostName={hostName} name={`${value.nativeID}_portal`}>
      <AlertDialogContext.Provider value={value}>
        {children}
      </AlertDialogContext.Provider>
    </RNPPortal>
  )
}

export { Portal }
