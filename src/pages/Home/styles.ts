import styled from 'styled-components'

export const TitleListProducts = styled.h2`
  margin-bottom: 3.375rem;
  font-family: '${(props) => props.theme.fonts.title}', cursive;
  font-size: ${(props) => props.theme.sizes['title-l']};
`

export const ListProducts = styled.section`
  display: grid;
  gap: 2rem 2.5rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (min-width: 768px) and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 768px) and (max-width: 992px) {
    gap: 2rem 1.5rem;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 575px) {
    grid-template-columns: 1fr;
  }
`
