import styled from 'styled-components'

export const DeliverySuccessContainer = styled.section`
  display: grid;
  align-items: flex-end;
  gap: 0 6.25rem;
  padding-top: 5rem;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 35%;
  }

  @media (max-width: 768px) {
    padding-top: 2rem;
    grid-template-columns: 1fr;
  }
`

export const Content = styled.div`
  margin-bottom: 0.625rem;

  @media (max-width: 768px) {
    margin-bottom: 3.125rem;
  }
`

export const Title = styled.h1`
  font-weight: 900;
  font-family: '${(props) => props.theme.fonts.title}', cursive;
  font-size: ${(props) => props.theme.sizes['title-l']};
  color: ${(props) => props.theme.colors['yellow-600']};
`

export const Subtitle = styled.h2`
  font-weight: normal;
  margin: 0.25rem 0 2.5rem;
  font-size: ${(props) => props.theme.sizes['text-l']};
  color: ${(props) => props.theme.colors['base-subtitle']};
`

export const InfoDelivery = styled.div`
  padding: 2.5rem;
  gap: 2rem 0;
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${(props) => props.theme.colors.white};
  border-radius: 6px 36px;

  &:before {
    content: '';
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    z-index: -1;
    border-radius: inherit;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colors['yellow-500']},
      ${(props) => props.theme.colors['purple-500']}
    );
  }
`

export const IconContainer = styled.div`
  width: 2rem;
  height: 2rem;
  background: ${(props) => props.theme.colors['purple-500']};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors.white};
  }
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0 0.75rem;

  &:nth-child(3n + 2) ${IconContainer} {
    background: ${(props) => props.theme.colors['yellow-500']};
  }

  &:nth-child(3n + 3) ${IconContainer} {
    background: ${(props) => props.theme.colors['yellow-600']};
  }
`

export const TextContainer = styled.div`
  flex: 1;
  color: ${(props) => props.theme.colors['base-text']};
`

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
`
