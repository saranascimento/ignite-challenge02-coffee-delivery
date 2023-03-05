import {
  CardContent,
  CoffeeCard,
  CoffeeCardContainer,
  PriceByQuantity,
} from './styles'
import coffeeExpress from '../../../../assets/coffees/expresso.svg'
import { Minus, Plus } from 'phosphor-react'

export function OurCoffee() {
  return (
    <>
      <h1>Nossos cafés</h1>
      <CoffeeCardContainer>
        <CoffeeCard>
          <img src={coffeeExpress} alt="" />
          <CardContent>
            <span className="type">Tradicional</span>
            <strong>Expresso Tradicional</strong>
            <p>O tradicional café feito com água quente e grãos moídos</p>
          </CardContent>
          <PriceByQuantity>
            <p>
              R$<strong>9,90</strong>
            </p>
            <div>
              <div className="quantitaty">
                <span>
                  <Plus size={14} color="#8047F8" weight="bold" />
                </span>
                <input
                  type="tel"
                  value={1}
                  minLength={1}
                  maxLength={9}
                  readOnly
                />
                <span>
                  <Minus size={14} color="#8047F8" weight="bold" />
                </span>
              </div>
            </div>
          </PriceByQuantity>
        </CoffeeCard>
      </CoffeeCardContainer>
    </>
  )
}
