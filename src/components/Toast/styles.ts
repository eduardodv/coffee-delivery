import styled from 'styled-components'

export const ToastContainer = styled.div<{ $spacing: boolean }>`
  position: relative;
  padding-right: ${(props) => (props.$spacing ? '20px' : '0')};
`

export const Title = styled.p`
  display: inline-block;
`

export const CloseButton = styled.button`
  position: absolute;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  border: 0;
  width: 20px;
  height: 20px;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors['base-label']};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors['base-error-600']};
  }
`
