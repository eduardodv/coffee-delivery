import styled from 'styled-components'

export const CartItemContainer = styled.div`
  padding: 2rem 0;
  display: grid;
  gap: 0 20px;
  grid-template-columns: 64px 1fr 100px;
  border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};

  &:first-child {
    padding-top: 0.625rem;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    grid-template-columns: 64px 1fr;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    justify-items: center;
    padding: 1rem 0;
    text-align: center;

    &:first-child {
      padding-top: 0;
    }
  }
`

export const Image = styled.img`
  width: 64px;

  @media (max-width: 767px) {
    margin-bottom: 1rem;
  }
`

export const MiddleContent = styled.div`
  @media (max-width: 991px) {
    margin-bottom: 1rem;
  }
`

export const TitleItemCart = styled.div`
  margin-bottom: 0.5rem;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 767px) {
    justify-content: center;
  }
`

export const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 0.4063rem;
  gap: 0 0.25rem;
  cursor: pointer;
  line-height: 1.2;
  color: ${(props) => props.theme.colors['base-text']};
  background: ${(props) => props.theme.colors['base-button']};
  font-size: ${(props) => props.theme.sizes['button-m']};
  transition: all 0.2s ease;

  svg {
    font-size: 1rem;
    color: ${(props) => props.theme.colors['purple-500']};
  }

  &:hover {
    color: ${(props) => props.theme.colors['base-subtitle']};
    background: ${(props) => props.theme.colors['base-hover']};

    svg {
      color: ${(props) => props.theme.colors['purple-600']};
    }
  }
`

export const Price = styled.span`
  font-weight: bold;
  text-align: right;
  color: ${(props) => props.theme.colors['base-text']};

  @media (min-width: 767px) and (max-width: 991px) {
    grid-column: 1/3;
    text-align: left;
  }
`
