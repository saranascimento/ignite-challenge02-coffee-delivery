import { MapPinLine } from 'phosphor-react'
import { Heading, PaperTitle, Title } from '../../styles'
import { AddressWrapper } from './styles'

export function Address() {
  return (
    <div>
      <Title className="title">Complete seu pedido</Title>
      <AddressWrapper>
        <Heading>
          <span>
            <MapPinLine size={22} color="#c47f17" />
          </span>
          <div>
            <PaperTitle>Endereço de Entrega </PaperTitle>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </Heading>
        <form action="">
          <input type="text" name="cep" placeholder="CEP" />
          <input
            type="text"
            name="street"
            placeholder="Rua"
            className="second-column"
          />
          <div className="third-column">
            <input type="text" name="number" placeholder="Número" />
            <div className="complement">
              <input type="text" name="complement" placeholder="Complemento" />
              <span>Opcional</span>
            </div>
          </div>
          <div className="last-column">
            <input type="text" name="neighborhood" placeholder="Bairro" />
            <input type="text" name="city" placeholder="Cidade" />
            <select id="uf" name="uf">
              <option value="">UF</option>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MS">MS</option>
              <option value="MT">MT</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
            </select>
          </div>
        </form>
      </AddressWrapper>
    </div>
  )
}
