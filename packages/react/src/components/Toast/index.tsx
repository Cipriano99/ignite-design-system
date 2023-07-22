import { Text } from '../Text'
import { Heading } from '../Heading'

import { X } from 'phosphor-react'

import * as S from './styles'

export interface ToastProps {
  date: Date
}

export const Toast = ({ date }: ToastProps) => {
  return (
    <S.ToastContainer>
      <header>
        <Heading size={'sm'}>Agendamento realizado</Heading>
        <button>
          <X size={20} />
        </button>
      </header>
      <Text size={'sm'} style={{ marginLeft: 8 }}>
        Quarta-feira, 23 de Outubro às 16h
      </Text>
    </S.ToastContainer>
  )
}

Toast.displayName = 'Toast'
