import React from 'react'

import { Minus, Plus } from 'phosphor-react'

import {
  ButtonMinus,
  ButtonPlus,
  InputValue,
  InputNumberCountContainer,
} from './styles'

interface InputNumberCountProps {
  incrementQuantity: () => void
  decrementQuantity: () => void
  inputChangeQuantity: (value: number) => void
  quantity: number
}

export function InputNumberCount({
  incrementQuantity,
  decrementQuantity,
  inputChangeQuantity,
  quantity,
}: InputNumberCountProps) {
  const handleInputChangeQuantity = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    inputChangeQuantity(Number(event.target.value))
  }

  return (
    <InputNumberCountContainer>
      <ButtonMinus onClick={decrementQuantity}>
        <Minus />
      </ButtonMinus>
      <InputValue
        type="number"
        value={quantity}
        onChange={handleInputChangeQuantity}
      />
      <ButtonPlus onClick={incrementQuantity}>
        <Plus />
      </ButtonPlus>
    </InputNumberCountContainer>
  )
}
