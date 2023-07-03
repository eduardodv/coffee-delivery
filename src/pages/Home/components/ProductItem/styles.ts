import styled from 'styled-components'

export const ProductItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  border-radius: 6px 36px;
  padding: 0 1.5rem 1.5rem;
  background-color: ${(props) => props.theme.colors['base-card']};
  max-width: 330px;

  @media (min-width: 768px) and (max-width: 992px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (max-width: 576px) {
    margin: auto;
  }
`

export const Image = styled.img`
  max-width: 90%;
  max-height: 120px;
  object-fit: contain;
  display: block;
  margin: -20px auto 0.75rem;
`

export const Tags = styled.div`
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  margin-bottom: 1rem;
`

export const Tag = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  border-radius: 50px;
  font-size: ${(props) => props.theme.sizes.tag};
  color: ${(props) => props.theme.colors['yellow-600']};
  background-color: ${(props) => props.theme.colors['yellow-400']};
`

export const Title = styled.h2`
  margin-bottom: 0.5rem;
  font-family: '${(props) => props.theme.fonts.title}', cursive;
  font-size: ${(props) => props.theme.sizes['title-s']};
`

export const Description = styled.p`
  flex: 1;
  color: ${(props) => props.theme.colors['base-label']};
  font-size: ${(props) => props.theme.sizes['text-s']};
`

export const FooterProduct = styled.footer`
  margin-top: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ItemsToAdd = styled.div`
  display: flex;
`

export const Price = styled.div`
  display: flex;
  align-items: flex-end;
  color: ${(props) => props.theme.colors['base-text']};
`

export const PricePrefix = styled.span`
  line-height: 2;
  margin-right: 0.1875rem;
  font-size: ${(props) => props.theme.sizes['text-s']};

  @media (min-width: 768px) and (max-width: 992px) {
    font-size: ${(props) => props.theme.sizes['text-xs']};
  }
`

export const PriceValue = styled.span`
  font-weight: 900;
  font-size: ${(props) => props.theme.sizes['title-m']};
  font-family: '${(props) => props.theme.fonts.title}', cursive;

  @media (min-width: 768px) and (max-width: 992px) {
    font-size: ${(props) => props.theme.sizes['title-s']};
  }
`

export const ButtonAddToCart = styled.button`
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 0.375rem;
  margin-left: 0.5rem;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors['purple-600']};
  transition: all 0.2s ease;

  &:disabled {
    cursor: not-allowed;
    background: ${(props) => props.theme.colors['purple-400']};
  }

  &:not(:disabled) &:hover {
    background: ${(props) => props.theme.colors['purple-500']};
  }

  svg {
    font-size: 22px;
    line-height: 0;
  }
`
