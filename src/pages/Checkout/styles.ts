import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const CheckoutContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 40%;
  gap: 2rem;
  margin-top: 2.5rem;

  @media (min-width: 992px) and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 576px) and (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 767px) {
    gap: 1rem;
  }

  @media (max-width: 575px) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h2`
  font-weight: 900;
  margin-bottom: 0.9375rem;
  font-family: '${(props) => props.theme.fonts.title}', cursive;
  font-size: ${(props) => props.theme.sizes['title-xs']};
`

export const TitleWithIcon = styled.div`
  position: relative;
  padding-left: 30px;

  svg {
    font-size: 22px;
    position: absolute;
    left: 0;
    top: 0;
    color: ${(props) => props.theme.colors['yellow-500']};
  }
`

export const TitleMedium = styled.h3`
  font-weight: normal;
  color: ${(props) => props.theme.colors['base-subtitle']};
  font-size: ${(props) => props.theme.sizes['text-m']};
`

export const Subtitle = styled.span`
  margin-bottom: 2rem;
  display: block;
  color: ${(props) => props.theme.colors['base-text']};
  font-size: ${(props) => props.theme.sizes['text-s']};
`

export const Card = styled.div`
  border-radius: 6px;
  padding: 2.5rem;
  margin-bottom: 0.75rem;
  background-color: ${(props) => props.theme.colors['base-card']};

  &:nth-child(2n + 1) ${TitleWithIcon} {
    svg {
      color: ${(props) => props.theme.colors['purple-500']};
    }
  }

  @media (max-width: 767px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`

export const InputsContainer = styled.div`
  display: grid;
  gap: 1rem 0.75rem;
  grid-template-columns: 38% 45% 13%;

  .cep {
    max-width: 38%;
    grid-column: span 3;
  }

  .street {
    width: 100%;
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }

  @media (max-width: 991px) {
    grid-template-columns: 1fr;

    .cep {
      max-width: 100%;
    }

    .cep,
    .street,
    .complement {
      grid-column: auto;
    }
  }
`
export const InputControl = styled.div`
  width: 100%;
  position: relative;
  &.optional {
    input {
      padding-right: 5rem;
    }

    &:after {
      content: 'Opcional';
      position: absolute;
      right: 0.75rem;
      top: 11px;
      font-style: italic;
      pointer-events: none;
      font-size: ${(props) => props.theme.sizes['text-s']};
      color: ${(props) => props.theme.colors['base-label']};
    }
  }
`

export const Input = styled(InputMask)<{ $hasError: boolean }>`
  width: 100%;
  border-radius: 4px;
  padding: 0.75rem;
  color: ${(props) => props.theme.colors['base-text']};
  font-size: ${(props) => props.theme.sizes['text-s']};
  background: ${(props) => props.theme.colors['base-input']};
  border: 1px solid
    ${(props) =>
      !props.$hasError
        ? props.theme.colors['base-button']
        : props.theme.colors['base-error']};

  &[name="uf"] {
    text-transform: uppercase;
  }

  &:focus {
    border-color: ${(props) => props.theme.colors['yellow-500']};
  }

  ::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
  }
`

export const ErrorMessageInput = styled.span`
  color: ${(props) => props.theme.colors['base-error']};
  margin-bottom: -10px;
  display: inline-block;
  font-size: ${(props) => props.theme.sizes['text-xs']};
  white-space: nowrap;
`

export const PaymentMethodContainer = styled.div`
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 1fr 1fr 1fr;
  position: relative;

  @media (min-width: 992px) and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`

export const PaymentMethod = styled.label<{ $hasError: boolean }>`
  padding: 15px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0 0.75rem;
  text-transform: uppercase;
  font-size: ${(props) => props.theme.sizes['button-m']};
  color: ${(props) => props.theme.colors['base-text']};
  line-height: 1.2;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors['base-button']};
  transition: all 0.2s ease;
  border: 1px solid
    ${(props) =>
      !props.$hasError ? 'transparent' : props.theme.colors['base-error']};

  svg {
    font-size: 1rem;
    min-width: 1rem;
    color: ${(props) => props.theme.colors['purple-500']};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors['base-hover']};
  }
`

export const PaymentMethodRadioButton = styled.input`
  width: 1px;
  height: 1px;
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  &:checked + ${PaymentMethod} {
    border-color: ${(props) => props.theme.colors['purple-500']};
    background-color: ${(props) => props.theme.colors['purple-400']};
  }
`

export const CheckoutFormInputs = styled.div``

export const CartItems = styled.div`
  ${Card} {
    border-top-right-radius: 44px;
    border-bottom-left-radius: 44px;
  }
`

export const ListCartItems = styled.div`
  margin-bottom: 1.5rem;
`

export const TotalItens = styled.div``

export const TotalItensLine = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  color: ${(props) => props.theme.colors['base-text']};

  &:last-child {
    font-weight: bold;
    font-size: ${(props) => props.theme.sizes['text-l']};
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  &:not(:last-child) span:nth-child(odd) {
    font-size: ${(props) => props.theme.sizes['text-s']};
  }

  &:not(:last-child) span:nth-child(even) {
    font-size: ${(props) => props.theme.sizes['text-m']};
  }

  span:nth-child(even) {
    text-align: right;
  }
`

export const ButtonConfirm = styled.button`
  margin-top: 0.75rem;
  width: 100%;
  font-size: ${(props) => props.theme.sizes['button-g']};
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  text-transform: uppercase;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  padding: 0.9375rem 1.25rem;
  background: ${(props) => props.theme.colors['yellow-500']};
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.colors['yellow-600']};
  }
`
export const ErrorMessage = styled.div`
  text-align: center;
  padding-top: 4rem;
`
