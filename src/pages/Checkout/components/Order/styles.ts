import styled from 'styled-components'
import { Paper } from '../../styles'

export const OrderWrapper = styled(Paper)`
  border-radius: 6px 44px;
  height: 31.125rem;
`

export const OrderResult = styled.div`
  margin-top: 1.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: 0.75rem;
    }

    p {
      &:first-of-type {
        font-size: 0.875rem;
        color: ${(props) => props.theme['gray-700']};
      }
    }
    strong {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme['gray-800']};
    }
  }
`

export const ConfirmOrder = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0.75rem 0.5rem;
  margin: 1.5rem auto 0 auto;
  gap: 0.25rem;

  width: 23rem;
  height: 2.875rem;

  background-color: #dbac2c;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  color: #ffffff;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;
  text-transform: uppercase;

  &:hover {
    background-color: #c47f17;
  }
`
