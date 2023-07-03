import styled from 'styled-components'

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px 12px;
`

export const IconContainer = styled.div`
  width: 32px;
  height: 32px;
  background: ${(props) =>
    props.color ? props.color : props.theme.colors['base-label']};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.white};
  }
`

export const TextContainer = styled.p`
  flex: 1;
  color: ${(props) => props.theme.colors['base-text']};
`
