import { ReactNode } from 'react'
import { ChipContent, ChipWrapper, Label, Radio } from './styles'

interface ChipProps {
  icon: ReactNode
  label: string
  id: string
  value: string
}

export function Chip({ icon, label, id, value }: ChipProps) {
  return (
    <ChipWrapper>
      <Radio type="radio" id={id} value={value} name="paymentOption" />
      <ChipContent>
        {icon}
        <Label>{label}</Label>
      </ChipContent>
    </ChipWrapper>
  )
}
