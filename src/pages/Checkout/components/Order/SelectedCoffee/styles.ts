import styled from 'styled-components'

export const SelectedCoffeeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};

  img {
    height: 4rem;
  }

  &:not(:first-child) {
    padding-top: 2rem;
  }
`

export const SelectedCoffeeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`

export const SelectedCoffeeInfo = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const Amount = styled.div`
  height: 2rem;
  background-color: ${(props) => props.theme['gray-400']};
  border-radius: 6px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;

  button {
    border: none;
    background: transparent;
    color: red;
    cursor: pointer;
    color: #8047f8;

    &:hover {
      color: #4b2995;
    }
  }

  input {
    border: none;
    background-color: ${(props) => props.theme['gray-400']};
    width: 1.25rem;
    height: 1.3125rem;
    text-align: center;
    color: ${(props) => props.theme['gray-900']};

    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
`

export const RemoveSelectedCoffee = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 0.5rem;
  cursor: pointer;
  gap: 0.25rem;
  transition: all 0.3s ease 0s;
  color: ${(props) => props.theme['gray-700']};

  width: 5.6875rem;
  height: 2rem;

  background-color: ${(props) => props.theme['gray-400']};
  border: none;
  border-radius: 6px;

  p {
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
  }

  &:hover {
    background-color: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['gray-800']};
  }
`
