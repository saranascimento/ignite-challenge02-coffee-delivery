import LogoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg'
import { HeaderContainer } from './styles'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffeeDelivery} alt="" />

      <nav>
        <NavLink to="/" className="map">
          <MapPin size={22} color="#8047F8" weight="fill" />
          <span>Porto Alegre, RS</span>
        </NavLink>
        <NavLink to="/checkout" title="Compras" className="cart">
          <ShoppingCart size={22} color="#c47f17" weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
