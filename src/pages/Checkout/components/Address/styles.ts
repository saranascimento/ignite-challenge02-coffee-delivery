import styled from 'styled-components'
import { Paper } from '../../styles'

export const AddressWrapper = styled(Paper)`
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input,
    select {
      padding: 0.75rem;
      height: 2.625rem;
      background-color: #eeeded;
      border: 1px solid ${(props) => props.theme['gray-400']};
      border-radius: 4px;
      display: block;
      color: ${(props) => props.theme['gray-700']};
    }

    input {
      width: 100%;

      @media (min-width: 768px) {
        &:not(
            input[name='street'],
            input[name='complement'],
            input[name='city']
          ) {
          width: 12.5rem;
        }
      }

      &::placeholder {
        color: ${(props) => props.theme['gray-600']};
        opacity: 1; /* Firefox */
      }

      &::-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: ${(props) => props.theme['gray-600']};
      }

      &::-ms-input-placeholder {
        /* Microsoft Edge */
        color: ${(props) => props.theme['gray-600']};
      }
    }

    select {
      width: 5rem;
    }

    .complement {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      input {
        padding-right: 4.125rem;
      }

      span {
        position: absolute;
        right: 0.75rem;
        font-size: 0.75rem;
        font-style: italic;
        color: ${(props) => props.theme['gray-600']};
      }
    }

    .third-column,
    .last-column {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      @media (min-width: 768px) {
        flex-direction: row;
      }
    }
  }
`
