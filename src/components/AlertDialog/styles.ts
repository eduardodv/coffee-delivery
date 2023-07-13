import styled, { keyframes } from 'styled-components'
import * as AlertDialogRadix from '@radix-ui/react-alert-dialog'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const AlertDialogRadixOverlay = styled(AlertDialogRadix.Overlay)`
  background-color: rgba(0, 0, 0, 0.44);
  position: fixed;
  inset: 0;
  z-index: 1000;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`

export const AlertDialogRadixContent = styled(AlertDialogRadix.Content)`
  background-color: white;
  border-radius: 6;
  z-index: 1001;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 25rem;
  max-height: 85vh;
  padding: 1.5625rem;
  border-radius: 8px;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);

  &:focus {
    outline: 'none';
  }
`

export const AlertDialogRadixTitle = styled(AlertDialogRadix.Title)`
  text-align: center;
  margin-bottom: 1.3rem;
  font-size: ${(props) => props.theme.sizes['text-l']};
`

export const Flex = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`

export const Button = styled.button<{ $danger?: boolean }>`
  width: 100%;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;
  border: 0px;
  border-radius: 6px;
  cursor: pointer;
  padding: 0.9375rem 1.25rem;
  color: ${(props) =>
    props.$danger
      ? props.theme.colors['base-error-600']
      : props.theme.colors['base-text']};
  background: ${(props) =>
    props.$danger
      ? props.theme.colors['base-error-400']
      : props.theme.colors['base-button']};
  transition: all 0.2s ease 0s;

  &:hover {
    color: ${(props) => props.theme.colors.white};
    background: ${(props) =>
      props.$danger
        ? props.theme.colors['base-error-600']
        : props.theme.colors['base-text']};
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px
      ${(props) =>
        props.$danger
          ? props.theme.colors['base-error-500']
          : props.theme.colors['base-label']};
  }
`
