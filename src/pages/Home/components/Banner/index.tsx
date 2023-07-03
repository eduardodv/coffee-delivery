import { Container } from '../../../../components/Container'

import { useTheme } from 'styled-components'

import {
  BannerContainer,
  BannerImageContainer,
  ListBenefits,
  Subtitle,
  Title,
  TwoColumns,
} from './styles'

import BannerImage from '../../../../assets/banner-home-coffee.png'
import BannerBackgroundImage from '../../../../assets/banner-bg.jpg'
import { Item } from './components/Item'
import { ShoppingCart, Package, Alarm, Coffee } from 'phosphor-react'

export function Banner() {
  const { colors } = useTheme()
  return (
    <BannerContainer
      style={{ backgroundImage: `url(${BannerBackgroundImage})` }}
    >
      <Container>
        <TwoColumns>
          <div>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </Subtitle>
            <ListBenefits>
              <Item
                text="Compra simples e segura"
                icon={<ShoppingCart weight="fill" />}
                color={colors['yellow-600']}
              ></Item>
              <Item
                text="Embalagem mantém o café intacto"
                icon={<Package weight="fill" />}
                color={colors['base-text']}
              ></Item>
              <Item
                text="Entrega rápida e rastreada"
                icon={<Alarm weight="fill" />}
                color={colors['yellow-500']}
              ></Item>
              <Item
                text="O café chega fresquinho até você"
                icon={<Coffee weight="fill" />}
                color={colors['purple-500']}
              ></Item>
            </ListBenefits>
          </div>
          <BannerImageContainer src={BannerImage} alt="" />
        </TwoColumns>
      </Container>
    </BannerContainer>
  )
}
