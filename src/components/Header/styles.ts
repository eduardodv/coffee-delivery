import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 2rem 0;
  background: ${(props) => props.theme.colors.white};
  transition: all 0.2s ease;
  z-index: 999;
  &.is-sticky {
    margin-top: 2rem;
    padding: 1rem 0;
    box-shadow: 0px 16px 30px -12px rgba(0, 0, 0, 0.1);
  }
`

export const ContainerBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  max-height: 2.5rem;
`

export const Links = styled.div`
  display: flex;
  gap: 0.75rem;

  a {
    text-decoration: none;

    &:focus {
      border-radius: 8px;
    }
  }
`

const BaseLink = styled.div`
  min-width: 2.375rem;
  min-height: 2.375rem;
  border-radius: 8px;
  padding: 0.3125rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
  transition: all 0.2s ease;

  svg {
    font-size: 1.375rem;
    width: 1.375rem;
    min-width: 1.375rem;
  }
`

export const Location = styled(BaseLink)`
  font-size: ${(props) => props.theme.sizes['text-s']};
  color: ${(props) => props.theme.colors['purple-600']};
  background: ${(props) => props.theme.colors['purple-400']};

  span {
    margin-left: 0.25rem;
  }

  @media (max-width: 576px) {
    max-width: 8.125rem;
    font-size: ${(props) => props.theme.sizes.tag};
  }
`

export const Cart = styled(BaseLink)`
  position: relative;
  color: ${(props) => props.theme.colors['yellow-600']};
  background: ${(props) => props.theme.colors['yellow-400']};

  &:hover {
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors['yellow-500']};
  }
`
export const CartCount = styled.div`
  border-radius: 50%;
  font-size: ${(props) => props.theme.sizes['text-xs']};
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors['yellow-600']};
  font-weight: 700;
  min-width: 1.25rem;
  min-height: 1.25rem;
  position: absolute;
  top: -0.625rem;
  right: -0.625rem;
  display: flex;
  padding: 0 0.1875rem;
  align-items: center;
  justify-content: center;
`
