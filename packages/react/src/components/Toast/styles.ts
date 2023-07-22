import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  width: '300px',
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  border: '1px solid $gray600',
  position: 'absolute',
  padding: '$1 $3 $2 $2',

  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  button: {
    all: 'unset',
    color: '$gray200',
    cursor: 'pointer',
  },
})
