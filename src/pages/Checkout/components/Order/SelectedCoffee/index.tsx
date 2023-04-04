import { Minus, Plus, Trash } from 'phosphor-react'
import { PaperTitle } from '../../../styles'
import {
  SelectedCoffeeWrapper,
  SelectedCoffeeInfo,
  Amount,
  SelectedCoffeeContent,
  RemoveSelectedCoffee,
} from './styles'

export function SelectedCoffee() {
  return (
    <SelectedCoffeeWrapper>
      <SelectedCoffeeContent>
        <img src="/src/assets/coffees/expresso.svg" alt="" />
        <div>
          <PaperTitle>Expresso Tradicional</PaperTitle>
          <SelectedCoffeeInfo>
            <Amount>
              <button>
                <Minus size={14} color="currentColor" weight="bold" />
              </button>
              <input
                type="tel"
                value={1}
                minLength={1}
                maxLength={9}
                readOnly
              />
              <button>
                <Plus size={14} color="currentColor" weight="bold" />
              </button>
            </Amount>
            <RemoveSelectedCoffee>
              <Trash size={16} color="#8047f8" />
              <p>Remove</p>
            </RemoveSelectedCoffee>
          </SelectedCoffeeInfo>
        </div>
      </SelectedCoffeeContent>
      <strong>R$ 9,90</strong>
    </SelectedCoffeeWrapper>
  )
}
