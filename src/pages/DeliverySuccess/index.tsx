import { useEffect } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { Container } from '../../components/Container'

import {
  DeliverySuccessContainer,
  Title,
  Subtitle,
  InfoDelivery,
  Item,
  IconContainer,
  TextContainer,
  Content,
  Image,
} from './styles'

import ImageDelivery from '../../assets/delivery-success.png'

export function DeliverySuccess() {
  const { state } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [navigate, state])

  if (!state) return <></>

  return (
    <Container>
      <DeliverySuccessContainer>
        <Content>
          <Title>Uhu! Pedido confirmado</Title>
          <Subtitle>
            Agora é só aguardar que logo o café chegará até você
          </Subtitle>
          <InfoDelivery>
            <Item>
              <IconContainer>
                <MapPin weight="fill" />
              </IconContainer>
              <TextContainer>
                <p>
                  Entrega em{' '}
                  <strong>
                    {state.data.street}, {state.data.streetNumber}
                  </strong>
                </p>
                <p>
                  {state.data.district} - {state.data.city}, {state.data.uf}
                </p>
              </TextContainer>
            </Item>
            <Item>
              <IconContainer>
                <Timer weight="fill" />
              </IconContainer>
              <TextContainer>
                <p>Previsão de entrega</p>
                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </TextContainer>
            </Item>
            <Item>
              <IconContainer>
                <CurrencyDollar />
              </IconContainer>
              <TextContainer>
                <p>Pagamento na entrega</p>
                <p>
                  <strong>{state.data.paymentMethod}</strong>
                </p>
              </TextContainer>
            </Item>
          </InfoDelivery>
        </Content>
        <Image src={ImageDelivery} alt="" />
      </DeliverySuccessContainer>
    </Container>
  )
}
