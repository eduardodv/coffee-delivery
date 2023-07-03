import Icon from 'phosphor-react'

import { IconContainer, ItemContainer, TextContainer } from './styles'

interface ItemProps {
  text: string
  icon: Icon.IconProps
  color?: string
}

export function Item({ text, icon, color }: ItemProps) {
  return (
    <ItemContainer>
      <IconContainer color={color}>
        <>{icon}</>
      </IconContainer>
      <TextContainer>{text}</TextContainer>
    </ItemContainer>
  )
}
