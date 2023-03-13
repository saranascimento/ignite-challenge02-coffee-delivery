import styled from 'styled-components'

export const CoffeeContainerCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 16rem;
  height: 19.375rem;

  text-align: center;
  background: ${(props) => props.theme['gray-300']};
  border-radius: 6px 36px;
  padding: 1.25rem;

  margin-bottom: 2.5rem;

  img {
    margin-top: -2.5rem;
    width: 7.5rem;
    height: 7.5rem;
  }
`
export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 0.75rem;

  .wrapper-type {
    margin-bottom: 16px;

    .type {
      padding: 0.25rem 0.5rem;
      color: ${(props) => props.theme['yellow-700']};
      text-transform: uppercase;
      font-weight: 700;
      font-size: 0.625rem;
      line-height: 130%;
      font-style: normal;
      background: ${(props) => props.theme['yellow-300']};
      border-radius: 100px;
      margin-bottom: 1rem;

      &:not(:last-child) {
        margin-right: 4px;
      }
    }
  }

  strong {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
    margin-bottom: 0.5rem;
  }
  p {
    font-style: normal;
    font-size: 0.875rem;
    line-height: 130%;
    margin-bottom: 2.0625rem;
  }
`

export const PriceByQuantity = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    strong {
      font-family: 'Baloo 2';
      font-style: normal;
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 130%;
      margin-left: 0.25rem;
      margin-right: 1.4375rem;
    }
  }

  .amount {
    width: 4.5rem;
    height: 2.375rem;
    background: #e6e5e5;
    border-radius: 6px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      cursor: pointer;
    }

    input {
      border: none;
      background-color: ${(props) => props.theme['gray-400']};
      width: 1.25rem;
      height: 1.3125rem;
      text-align: center;

      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
  }
`
export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  .wrapper-shoppingCart {
    padding: 8px;
    background-color: ${(props) => props.theme['purple-700']};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
