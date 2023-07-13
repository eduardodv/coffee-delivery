import { Trash } from 'phosphor-react'
import * as AlertDialogRadix from '@radix-ui/react-alert-dialog'

import { InputNumberCount } from '../../../components/InputNumberCount'
import { AlertDialog } from '../../../components/AlertDialog'

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

          <AlertDialogRadix.Root>
            <AlertDialogRadix.Trigger asChild>
              <RemoveButton>
                <Trash /> REMOVER
              </RemoveButton>
            </AlertDialogRadix.Trigger>
            <AlertDialog
              title="Tem certeza que deseja remover o item do carrinho?"
              actionButton={handleRemoveToCart}
            />
          </AlertDialogRadix.Root>
        </ButtonsContainer>
      </MiddleContent>
      <Price>R$ {formatMoney(price)}</Price>
    </CartItemContainer>
  )
}
