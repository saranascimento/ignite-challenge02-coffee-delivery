import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  InfoList,
  SuccessContent,
  SuccessHeader,
  SuccessInfo,
  WrapperDeliveryManImage,
} from './styles'
import deliveryManImage from '../../assets/deliveryman.png'

export function Success() {
  return (
    <>
      <SuccessHeader>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessHeader>
      <SuccessContent>
        <SuccessInfo>
          <InfoList>
            <li>
              <span className="mapPin">
                <MapPin size={16} color="#ffffff" weight="fill" />
              </span>
              <div>
                <p>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{' '}
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </li>
            <li>
              <span className="timer">
                <Timer size={16} color="#ffffff" weight="fill" />
              </span>
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </li>
            <li>
              <span className="currencyDollar">
                <CurrencyDollar size={16} color="#ffffff" />
              </span>
              <div>
                <p>Pagamento na entrega</p>
                <strong>Cartão de Crédito</strong>
              </div>
            </li>
          </InfoList>
        </SuccessInfo>
        <WrapperDeliveryManImage>
          <img src={deliveryManImage} alt="" />
        </WrapperDeliveryManImage>
      </SuccessContent>
    </>
  )
}
