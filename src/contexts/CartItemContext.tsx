import { ReactNode, createContext, useEffect, useState } from 'react'
import { ProductItemProps } from '../pages/Home/components/ProductItem'

interface CartItem extends ProductItemProps {
  quantity: number
}

interface CartItemContextType {
  cartItems: CartItem[]
  totalItemsInCart: number
  addToCart: (item: CartItem) => void
  removeToCart: (id: number) => void
  changeQuantityCartItem: (
    id: number,
    type: 'increment' | 'decrement' | 'inputChange',
    valueInput?: number | 1,
  ) => void
  resetCart: () => void
}

interface CartItemContextProviderProps {
  children: ReactNode
}

export const CartItemContext = createContext({} as CartItemContextType)

export function CartItemContextProvider({
  children,
}: CartItemContextProviderProps) {
  const storedStateAsJSON =
    JSON.parse(localStorage.getItem('@coffee-delivery:cart-items-1.0.0')!) || []

  const [cartItems, setCartItems] = useState<CartItem[]>(storedStateAsJSON)

  useEffect(() => {
    const stateJSON = JSON.stringify(cartItems)

    localStorage.setItem('@coffee-delivery:cart-items-1.0.0', stateJSON)
  }, [cartItems])

  const totalItemsInCart = cartItems.length

  function addToCart(item: CartItem) {
    const alreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id,
    )

    if (alreadyExistsInCart < 0) {
      setCartItems([...cartItems, item])
    } else {
      const updatedItems = [...cartItems]
      updatedItems[alreadyExistsInCart].quantity += item.quantity

      setCartItems(updatedItems)
    }
  }

  function removeToCart(id: number) {
    const updateItemsWithoutRemovedItem = cartItems.filter(
      (item) => item.id !== id,
    )
    setCartItems(updateItemsWithoutRemovedItem)
  }

  function changeQuantityCartItem(
    id: number,
    type: 'increment' | 'decrement' | 'inputChange',
    valueInput: number | undefined = 1,
  ) {
    const alreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === id,
    )

    if (alreadyExistsInCart >= 0) {
      const updatedItems = [...cartItems]
      const item = updatedItems[alreadyExistsInCart]

      switch (type) {
        case 'increment':
          item.quantity = item.quantity + 1
          break
        case 'decrement':
          if (item.quantity > 1) {
            item.quantity = item.quantity - 1
          }
          break
        case 'inputChange':
          item.quantity = valueInput
          if (item.quantity < 1) {
            item.quantity = 1
          }
          break
        default:
          return updatedItems
      }

      setCartItems(updatedItems)
    }
  }

  function resetCart() {
    setCartItems([])
  }

  return (
    <CartItemContext.Provider
      value={{
        cartItems,
        totalItemsInCart,
        addToCart,
        removeToCart,
        changeQuantityCartItem,
        resetCart,
      }}
    >
      {children}
    </CartItemContext.Provider>
  )
}
