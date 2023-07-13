import * as AlertDialogRadix from '@radix-ui/react-alert-dialog'

import {
  AlertDialogRadixContent,
  AlertDialogRadixOverlay,
  AlertDialogRadixTitle,
  Button,
  Flex,
} from './styles'

interface AlertDialogProps {
  title: string
  actionButton: () => void
}

export function AlertDialog({ title, actionButton }: AlertDialogProps) {
  return (
    <AlertDialogRadix.Portal>
      <AlertDialogRadixOverlay />
      <AlertDialogRadixContent>
        <AlertDialogRadixTitle>{title}</AlertDialogRadixTitle>
        <Flex>
          <AlertDialogRadix.Cancel asChild>
            <Button>Cancelar</Button>
          </AlertDialogRadix.Cancel>
          <AlertDialogRadix.Action asChild>
            <Button $danger onClick={actionButton}>
              Sim
            </Button>
          </AlertDialogRadix.Action>
        </Flex>
      </AlertDialogRadixContent>
    </AlertDialogRadix.Portal>
  )
}
