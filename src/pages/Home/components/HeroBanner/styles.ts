import styled from 'styled-components'

export const HeroBannerContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5.75rem;
  }
`

export const TitleAndSubtitleContainer = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: start;
  }

  .title {
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-900']};
    font-family: 'Baloo 2', cursive;
    font-style: normal;
    font-weight: 800;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
    margin-bottom: 4.125rem;

    @media (min-width: 768px) {
      text-align: start;
    }
  }
`
export const InformationContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;

  @media (min-width: 1024px) {
    margin-top: unset;
  }

  p {
    line-height: 130%;
    margin-right: 2.5rem;
    margin-bottom: 1.25rem;

    .info {
      width: 2rem;
      height: 2rem;
      border-radius: 1000px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.75rem;
    }

    .info-cart {
      background-color: ${(props) => props.theme['yellow-700']};
    }
    .info-package {
      background-color: ${(props) => props.theme['gray-700']};
    }
    .info-timer {
      background-color: ${(props) => props.theme['yellow-500']};
    }
    .info-coffee {
      background-color: ${(props) => props.theme['purple-500']};
    }
  }
`
export const CoffeeImageContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 29.75rem;

  &.coffee-image-desktop {
    display: none;

    @media (min-width: 1024px) {
      display: block;
    }
  }

  &.coffee-image-mobile {
    display: block;

    @media (min-width: 1024px) {
      display: none;
    }
  }
`
