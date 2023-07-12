import { Toaster } from 'react-hot-toast'

import { Container } from '../../components/Container'
import { Banner } from './components/Banner'
import { ProductItem } from './components/ProductItem'

import { ListProducts, TitleListProducts } from './styles'

import { coffees } from '../../data/coffees.ts'

export function Home() {
  return (
    <main>
      <Banner />
      <Container>
        <TitleListProducts>Nossos cafés</TitleListProducts>
        <ListProducts>
          {coffees.map((item) => {
            return (
              <ProductItem
                key={item.id}
                id={item.id}
                srcImage={item.src_image}
                title={item.title}
                description={item.description}
                price={item.price}
                tags={item.tags}
              />
            )
          })}
        </ListProducts>
        <Toaster position="bottom-right" />
        {coffees.length <= 0 && <div>Nenhum produto cadastrado.</div>}
      </Container>
    </main>
  )
}
