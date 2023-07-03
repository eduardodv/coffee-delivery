import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg'

import {
  Cart,
  CartCount,
  HeaderContainer,
  Links,
  Location,
  Logo,
  ContainerBetween,
} from './styles'

import { Container } from '../Container'

import { CartItemContext } from '../../contexts/CartItemContext'

const APIEndpoint = 'https://ipapi.co/json/'

interface LocationProps {
  city: string
  state: string
}

export function Header() {
  const { totalItemsInCart } = useContext(CartItemContext)

  const [sticky, setSticky] = useState('')
  const [location, setLocation] = useState<LocationProps>(Object)

  // on render, set listener
  useEffect(() => {
    window.addEventListener('scroll', isSticky)
    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  }, [])

  useEffect(() => {
    axios
      .get(APIEndpoint)
      .then((response) => {
        setLocation({
          city: response.data.city,
          state: response.data.region_code,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY

    const stickyClass = scrollTop > 60 ? 'is-sticky' : ''
    setSticky(stickyClass)
  }

  return (
    <HeaderContainer className={sticky}>
      <Container>
        <ContainerBetween>
          <NavLink to="/">
            <Logo
              src={logo}
              alt="Logo: Coffee Delivery - Copo de café na cor roxa"
            />
          </NavLink>
          <Links>
            <Location>
              <MapPin weight="fill" />
              <span>
                {Object.keys(location).length
                  ? `${location.city}, ${location.state}`
                  : 'Carregando...'}
              </span>
            </Location>

            <NavLink to="checkout" title="Checkout">
              <Cart>
                <ShoppingCart weight="fill" />
                {totalItemsInCart > 0 && (
                  <CartCount>{totalItemsInCart}</CartCount>
                )}
              </Cart>
            </NavLink>
          </Links>
        </ContainerBetween>
      </Container>
    </HeaderContainer>
  )
}
