import { styled } from '../../styles'
import { Box } from '../Box'

export const TooltipWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,

  height: 'fit-content',
  overflow: 'visible',

  '&:hover >div:first-child': {
    display: 'block',
  },
})

export const TooltipContainer = styled(Box, {
  width: 'fit-content',
  padding: '$3',
  position: 'relative',
  display: 'none',
  zIndex: 99,

  '&::after': {
    content: '',
    position: 'absolute',
    width: 0,
    height: 0,
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderTop: '8px solid $gray800',

    marginTop: 12,
    left: 'calc(50% - 8px)',
  },
})

export const TooltipChildren = styled('div', {})
