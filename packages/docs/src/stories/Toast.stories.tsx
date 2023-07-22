import type { StoryObj, Meta } from "@storybook/react"
import { Toast, ToastProps } from '@cipriano99-ignite-ui/react'

export default {
  title: 'Data display/Toast',
  component: Toast,

  args: {
    day: 12,
    month: 'Julho',
  },
  
  argTypes: {
    src: {}
  }
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
