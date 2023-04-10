import styled from 'styled-components'

export const SuccessHeader = styled.div`
  margin-top: 5rem;
  margin-bottom: 2.5rem;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: #c47f17;
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: #403937;
  }
`

export const SuccessContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.5rem;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`

export const SuccessInfo = styled.div`
  border-radius: 6px 36px;
  max-width: 32.875rem;
  width: 100%;
  min-width: 20rem;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
  position: relative;
  background-color: #fafafa;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%) border-box;
  border: 1px solid transparent;
`

export const InfoList = styled.ul`
  li {
    display: flex;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }

    span {
      padding: 8px;
      width: 32px;
      height: 32px;
      border-radius: 32px;
      margin-right: 12px;

      &.mapPin {
        background: #8047f8;
      }
      &.timer {
        background: #dbac2c;
      }
      &.currencyDollar {
        background: #c47f17;
      }
    }
  }
`
export const WrapperDeliveryManImage = styled.div`
  max-width: 32.875rem;
  width: 100%;
  min-width: 20rem;
`
