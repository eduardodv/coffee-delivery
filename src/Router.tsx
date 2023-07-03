import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'
import { DefaultLayout } from './layouts/DefaultLayout'
import { DeliverySuccess } from './pages/DeliverySuccess'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/delivery-success" element={<DeliverySuccess />} />
      </Route>
    </Routes>
  )
}
