import toast from 'react-hot-toast'
import { ShoppingCart } from 'phosphor-react'

import { InputNumberCount } from '../../../../components/InputNumberCount'
import { Toast } from '../../../../components/Toast'

import {
  ButtonAddToCart,
  Description,
  FooterProduct,
  Image,
  Price,
  ProductItemContainer,
  Tags,
  Tag,
  Title,
  PricePrefix,
  ItemsToAdd,
  PriceValue,
} from './styles'

import { formatMoney } from '../../../../utils/formatMoeney'
import { useContext, useState } from 'react'
import { CartItemContext } from '../../../../contexts/CartItemContext'

export interface ProductItemProps {
  id: number
  srcImage: string
  title: string
  price: number
  description: string
  tags: string[]
}

export function ProductItem({
  id,
  srcImage,
  title,
  price,
  description,
  tags,
}: ProductItemProps) {
  const { addToCart } = useContext(CartItemContext)

  function handleAddToCart() {
    const itemToAdd = {
      id,
      srcImage,
      title,
      price,
      description,
      tags,
      quantity,
    }
    addToCart(itemToAdd)
    inputChangeQuantity(1)

    const boldTitle = `${quantity}x ${title}`
    toast.success(
      (t) => (
        <Toast
          id={t.id}
          boldTitle={boldTitle}
          title="adicionado ao carrinho!"
          isDismissible
        />
      ),
      {
        duration: 3000,
        style: {
          maxWidth: 500,
        },
      },
    )
  }

  let [quantity, setCountQuantity] = useState<number>(1)

  function incrementQuantity() {
    quantity = quantity + 1
    setCountQuantity(quantity)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      quantity = quantity - 1
      setCountQuantity(quantity)
    }
  }

  function inputChangeQuantity(value: number) {
    setCountQuantity(Number(value))
  }

  return (
    <ProductItemContainer>
      <Image src={srcImage} alt="" />
      <Tags>
        {tags.map((tag) => {
          return <Tag key={tag}>{tag}</Tag>
        })}
      </Tags>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <FooterProduct>
        <Price>
          <PricePrefix>R$</PricePrefix>
          <PriceValue>{formatMoney(price)}</PriceValue>
        </Price>
        <ItemsToAdd>
          <InputNumberCount
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            inputChangeQuantity={inputChangeQuantity}
            quantity={quantity}
          />
          <ButtonAddToCart disabled={quantity < 1} onClick={handleAddToCart}>
            <ShoppingCart weight="fill" />
          </ButtonAddToCart>
        </ItemsToAdd>
      </FooterProduct>
    </ProductItemContainer>
  )
}
