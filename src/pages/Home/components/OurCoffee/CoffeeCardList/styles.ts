import styled from 'styled-components'

export const CardList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3.375rem;
  gap: 2rem;

  @media screen and (min-width: 920px) {
    justify-content: start;
  }
`
