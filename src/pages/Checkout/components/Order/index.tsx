import { Title } from '../../styles'
import { SelectedCoffee } from './SelectedCoffee'
import { ConfirmOrder, OrderResult, OrderWrapper } from './styles'

export function Order() {
  return (
    <div>
      <Title>Cafés selecionados</Title>
      <OrderWrapper>
        <SelectedCoffee />
        <SelectedCoffee />
        <OrderResult>
          <div>
            <p>Total de itens</p>
            <p>R$ 29,70</p>
          </div>
          <div>
            <p>Entrega</p>
            <p>R$ 3,50</p>
          </div>
          <div>
            <strong>Total</strong>
            <strong>R$ 33,20</strong>
          </div>
        </OrderResult>
        <ConfirmOrder>Confirmar pedido</ConfirmOrder>
      </OrderWrapper>
    </div>
  )
}
