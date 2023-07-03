import styled from 'styled-components'

export const BannerContainer = styled.section`
  background-position: top left;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 5.75rem 0;

  @media (max-width: 992px) {
    padding: 3rem 0 4rem;
  }
`

export const TwoColumns = styled.div`
  display: grid;
  gap: 1.75rem;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (min-width: 768px) and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h1`
  font-family: '${(props) => props.theme.fonts.title}', cursive;
  font-size: ${(props) => props.theme.sizes['title-xl']};
  font-weight: 900;
  margin-bottom: 1rem;

  @media (min-width: 768px) and (max-width: 992px) {
    font-size: ${(props) => props.theme.sizes['title-l']};
  }

  @media (max-width: 575px) {
    font-size: ${(props) => props.theme.sizes['title-l']};
  }
`

export const Subtitle = styled.h3`
  font-size: ${(props) => props.theme.sizes['text-l']};
  font-weight: 400;
  margin-bottom: 4.125rem;
  color: ${(props) => props.theme.colors['base-subtitle']};

  @media (max-width: 575px) {
    margin-bottom: 3rem;
  }
`

export const ListBenefits = styled.div`
  display: grid;
  gap: 1.25rem 2.5rem;
  grid-template-columns: auto 1fr;

  @media (min-width: 768px) and (max-width: 992px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 575px) {
    grid-template-columns: 1fr;
  }
`

export const BannerImageContainer = styled.img`
  display: block;
  margin: auto;
  max-width: 100%;
`
