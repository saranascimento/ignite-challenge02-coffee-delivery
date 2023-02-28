import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 33px 0;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    position: fixed;
    left: 0;
    bottom: 0;
    align-content: center;
    width: 100%;
    height: 3.5rem;
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 1.5rem;
    background: ${(props) => props.theme.white};
    box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    @media (min-width: 768px) {
      position: relative;
      top: 0;
      right: 0;
      width: auto;
      height: auto;
      background: none;
      box-shadow: none;
    }

    .map {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      background-color: ${(props) => props.theme['purple-300']};
      border-radius: 6px;
      gap: 0.25rem;
      text-decoration: none;
    }

    .cart {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;

      width: 38px;
      height: 38px;
      background: ${(props) => props.theme['yellow-300']};
      border: none;
      border-radius: 6px;
    }
  }
`
