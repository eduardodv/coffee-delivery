import styled from 'styled-components'

export const InputNumberCountContainer = styled.div`
  height: 2.375rem;
  display: flex;
  border-radius: 0.375rem;
  overflow: hidden;
  max-width: max-content;
  background-color: ${(props) => props.theme.colors['base-button']};
`

const ButtonCountDefault = styled.button.attrs({
  type: 'button',
})`
  border: 0;
  background: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors['purple-500']};
  transition: all 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors['purple-600']};
  }

  svg {
    font-size: 0.875rem;
  }
`
export const ButtonMinus = styled(ButtonCountDefault)`
  padding: 0.625rem 0.25rem 0.5rem 0.375rem;
`

export const ButtonPlus = styled(ButtonCountDefault)`
  padding: 0.625rem 0.375rem 0.5rem 0.25rem;
`

export const InputValue = styled.input`
  border: 0;
  background: none;
  width: 24px;
  text-align: center;
  font-size: ${(props) => props.theme.sizes['text-m']};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
