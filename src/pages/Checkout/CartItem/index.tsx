import { Trash } from 'phosphor-react'

import { InputNumberCount } from '../../../components/InputNumberCount'

import { formatMoney } from '../../../utils/formatMoeney'

import { useContext } from 'react'
import { CartItemContext } from '../../../contexts/CartItemContext'

import {
  ButtonsContainer,
  CartItemContainer,
  Image,
  MiddleContent,
  Price,
  RemoveButton,
  TitleItemCart,
} from './styles'

interface CartItemProps {
  id: number
  srcImage: string
  title: string
  price: number
  quantity: number
}

export function CartItem({
  id,
  srcImage,
  title,
  price,
  quantity,
}: CartItemProps) {
  const { removeToCart } = useContext(CartItemContext)

  function handleRemoveToCart() {
    removeToCart(id)
  }

  const { changeQuantityCartItem } = useContext(CartItemContext)

  function handleIncrementQuantity() {
    changeQuantityCartItem(id, 'increment')
  }

  function handleDecrementQuantity() {
    changeQuantityCartItem(id, 'decrement')
  }

  function handleInputChangeQuantity(valueInput: number) {
    changeQuantityCartItem(id, 'inputChange', valueInput)
  }

  return (
    <CartItemContainer>
      <Image src={srcImage} alt="" />
      <MiddleContent>
        <TitleItemCart>{title}</TitleItemCart>
        <ButtonsContainer>
          <InputNumberCount
            incrementQuantity={handleIncrementQuantity}
            decrementQuantity={handleDecrementQuantity}
            inputChangeQuantity={handleInputChangeQuantity}
            quantity={quantity}
          />
          <RemoveButton onClick={handleRemoveToCart}>
            <Trash /> REMOVER
          </RemoveButton>
        </ButtonsContainer>
      </MiddleContent>
      <Price>R$ {formatMoney(price)}</Price>
    </CartItemContainer>
  )
}
