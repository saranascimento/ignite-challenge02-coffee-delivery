import styled from 'styled-components'

export const CheckoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 1080px) {
    grid-template-columns: 1fr 28rem;
  }
`

export const Title = styled.h1`
  margin-bottom: 0.9375rem;
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 130%;
  color: ${(props) => props.theme['gray-800']};
`

export const Paper = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 6px;
  padding: 2.5rem;
  width: 100%;

  @media (min-width: 1080px) {
    max-width: 40rem;
  }
`
export const PaperTitle = styled.h1`
  color: ${(props) => props.theme['gray-800']};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
`

export const Heading = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 2rem;

  p:nth-child(1) {
    color: ${(props) => props.theme['gray-800']};
  }

  p:nth-child(2) {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-700']};
  }
`
