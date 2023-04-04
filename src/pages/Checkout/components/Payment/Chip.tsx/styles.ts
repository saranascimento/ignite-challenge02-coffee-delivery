import styled from 'styled-components'

export const ChipWrapper = styled.div`
  width: 100%;
  height: 3.1875rem;
  position: relative;

  @media (min-width: 768px) {
    width: 11.1669rem;
  }

  &:hover > div {
    background-color: #d7d5d5;
    color: ${(props) => props.theme['gray-800']};
  }
`
export const Radio = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
  inset: 0px;

  &:checked + div {
    background-color: rgb(235, 229, 249);
    box-shadow: 0 0 0 1px ${(props) => props.theme['purple-500']};
  }
`

export const ChipContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) => props.theme['gray-400']};
  border-radius: 6px;
  cursor: pointer;
  color: ${(props) => props.theme['gray-700']};
  transition: all 0.3s ease 0s;
  gap: 0.75rem;
`
export const Label = styled.p`
  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;
`
