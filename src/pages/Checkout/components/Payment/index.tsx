import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { Chips, PaymentWrapper } from './styles'
import { Heading, PaperTitle } from '../../styles'
import { Chip } from './Chip.tsx'

export const paymentOptions = {
  credit: {
    label: 'Cartão de crédito',
    icon: <CreditCard size={16} color="#8047f8" />,
  },
  debit: {
    label: 'Cartão de débito',
    icon: <Bank size={16} color="#8047f8" />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} color="#8047f8" />,
  },
}

export function Payment() {
  return (
    <PaymentWrapper>
      <Heading>
        <span>
          <CurrencyDollar size={22} color="#8047F8" />
        </span>
        <div>
          <PaperTitle>Pagamento</PaperTitle>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </Heading>
      <Chips>
        {Object.entries(paymentOptions).map(([key, { label, icon }]) => {
          return (
            <Chip key={label} id={key} icon={icon} label={label} value={key} />
          )
        })}
      </Chips>
    </PaymentWrapper>
  )
}
