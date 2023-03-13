import {
  Card,
  CardContent,
  CardFooter,
  CoffeeContainerCards,
  PriceByQuantity,
} from './styles'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Coffee } from '../../../../../reducers/coffees/reducer'

export function CoffeeCard({
  image,
  title,
  description,
  price,
  types,
  amount,
}: Coffee) {
  return (
    <CoffeeContainerCards>
      <Card>
        <img src={image} alt="" />
        <CardContent>
          <p className="wrapper-type">
            {types.map((type) => {
              return (
                <span key={type} className="type">
                  {type}
                </span>
              )
            })}
          </p>

          <strong>{title}</strong>
          <p>{description}</p>
        </CardContent>
        <CardFooter>
          <PriceByQuantity>
            <p>
              R$<strong>{price}</strong>
            </p>
            <div>
              <div className="amount">
                <span>
                  <Minus size={14} color="#8047F8" weight="bold" />
                </span>
                <input
                  type="tel"
                  value={amount}
                  minLength={1}
                  maxLength={9}
                  readOnly
                />
                <span>
                  <Plus size={14} color="#8047F8" weight="bold" />
                </span>
              </div>
            </div>
          </PriceByQuantity>
          <span className="wrapper-shoppingCart">
            <ShoppingCart size={22} color="#ffffff" weight="fill" />
          </span>
        </CardFooter>
      </Card>
    </CoffeeContainerCards>
  )
}
