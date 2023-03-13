import { createContext, ReactNode, useState } from 'react'
import { coffeesData } from '../coffeesData'

import { Coffee } from '../reducers/coffees/reducer'

interface CoffeesContextType {
  coffees: Coffee[]
}

interface CoffeesContextProviderProps {
  children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>(coffeesData)
  console.log(setCoffees)

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
