import { toast } from 'react-hot-toast'
import { X } from 'phosphor-react'

import { CloseButton, Title, ToastContainer } from './styles'

interface ToastProps {
  id?: string
  boldTitle?: string
  title: string
  isDismissible?: boolean
}

export function Toast({ id, boldTitle, title, isDismissible }: ToastProps) {
  return (
    <ToastContainer $spacing={!!isDismissible}>
      <Title>
        <strong>{boldTitle} </strong>
        {title}
      </Title>
      {isDismissible && (
        <CloseButton onClick={() => toast.dismiss(id)}>
          <X weight="bold" width={14} />
        </CloseButton>
      )}
    </ToastContainer>
  )
}
