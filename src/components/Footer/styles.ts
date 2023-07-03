import styled from 'styled-components'
import { ContentContainer } from '../Container/styles'

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: ${(props) => props.theme.sizes['text-s']};
  padding: 0.7rem 1rem;
  background-color: ${(props) => props.theme.colors['purple-400']};

  ${ContentContainer} {
    display: flex;
    gap: 0.5rem;
    justify-content: center;

    @media (max-width: 400px) {
      flex-direction: column;
      align-items: center;
      gap: 0.3rem;
    }
  }
`

export const LinkLabel = styled.p`
  a {
    text-decoration: none;
    font-weight: bold;
    margin-left: 0.3125rem;
    color: ${(props) => props.theme.colors['purple-500']};

    &:hover {
      color: ${(props) => props.theme.colors['purple-600']};
    }
  }

  @media (max-width: 400px) {
    &:nth-child(2) {
      display: none;
    }
  }
`
