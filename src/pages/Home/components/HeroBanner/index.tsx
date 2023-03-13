import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeeHeroBannerImage from '../../../../assets/coffee-heroBanner.png'
import {
  CoffeeImageContainer,
  HeroBannerContainer,
  InformationContainer,
  TitleAndSubtitleContainer,
} from './styles'

export function HeroBanner() {
  return (
    <HeroBannerContainer>
      <div>
        <TitleAndSubtitleContainer>
          <h1 className="title">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <h3 className="subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
        </TitleAndSubtitleContainer>
        <CoffeeImageContainer className="coffee-image-mobile">
          <img src={coffeeHeroBannerImage} alt="" />
        </CoffeeImageContainer>
        <InformationContainer>
          <p>
            <span className="info info-cart">
              <ShoppingCart size={16} color="#ffffff" weight="fill" />
            </span>{' '}
            Compra simples e segura
          </p>
          <p>
            <span className="info info-package">
              <Package size={16} color="#ffffff" weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </p>
          <p>
            <span className="info info-timer">
              <Timer size={16} color="#ffffff" weight="fill" />
            </span>
            Entrega rápida e rastreada
          </p>
          <p>
            <span className="info info-coffee">
              <Coffee size={16} color="#ffffff" weight="fill" />
            </span>{' '}
            O café chega fresquinho até você
          </p>
        </InformationContainer>
      </div>

      <CoffeeImageContainer className="coffee-image-desktop">
        <img src={coffeeHeroBannerImage} alt="" />
      </CoffeeImageContainer>
    </HeroBannerContainer>
  )
}
