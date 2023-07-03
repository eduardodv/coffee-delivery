import { ReactNode } from 'react'
import { ContentContainer } from './styles'

interface ContainerProps {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return <ContentContainer>{children}</ContentContainer>
}
