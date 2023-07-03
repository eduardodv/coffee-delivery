import { NavLink } from 'react-router-dom'
import { Container } from '../Container'
import { FooterContainer, LinkLabel } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <Container>
        <LinkLabel>
          Desenvolvido por
          <NavLink to="https://github.com/eduardodv" target="_blank">
            e.
          </NavLink>
        </LinkLabel>
        <LinkLabel>|</LinkLabel>
        <LinkLabel>
          Project by:
          <NavLink to="https://www.rocketseat.com.br/" target="_blank">
            Rocketseat
          </NavLink>
        </LinkLabel>
      </Container>
    </FooterContainer>
  )
}
