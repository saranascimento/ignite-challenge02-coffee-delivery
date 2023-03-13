import { useContext } from 'react'
import { CoffeesContext } from '../../../../../contexts/CoffeeContext'
import { CoffeeCard } from '../CoffeeCard'
import { CardList } from './styles'

export function CardCoffeeList() {
  const { coffees } = useContext(CoffeesContext)
  console.log(coffees)

  return (
    <div>
      <h1>Nossos cafés</h1>
      <CardList>
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            id={coffee.id}
            types={coffee.types}
            title={coffee.title}
            description={coffee.description}
            price={coffee.price}
            amount={coffee.amount}
            image={coffee.image}
          />
        ))}
      </CardList>
    </div>
  )
}
