import { Address } from './components/Address'
import { Order } from './components/Order'
import { Payment } from './components/Payment'
import { CheckoutWrapper } from './styles'

export function Checkout() {
  return (
    <CheckoutWrapper>
      <div>
        <Address />
        <Payment />
      </div>
      <Order />
    </CheckoutWrapper>
  )
}
