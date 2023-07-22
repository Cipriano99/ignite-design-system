import * as S from './styles'
import { Text } from '../Text'

export interface TooltipProps {
  day: number
  month: string
  unavailable?: boolean
}

export const Tooltip = ({ day, month, unavailable = false }: TooltipProps) => {
  return (
    <S.TooltipWrapper>
      <S.TooltipContainer id="tooltip-container">
        <Text>
          {day} de {month} - {unavailable ? 'Indisponível' : 'Disponível'}
        </Text>
      </S.TooltipContainer>
      <Text>Hover me</Text>
    </S.TooltipWrapper>
  )
}

Tooltip.displayName = 'Tooltip'
