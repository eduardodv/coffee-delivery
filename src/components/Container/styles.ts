import styled from 'styled-components'

export const ContentContainer = styled.div`
  max-width: 72.3rem;
  margin: auto;
  padding: 0 1.25rem;

  @media (min-width: 768px) and (max-width: 992px) {
    max-width: 55rem;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    max-width: 40rem;
  }
`
