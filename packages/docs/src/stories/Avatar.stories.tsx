import type { StoryObj, Meta } from "@storybook/react"
import { Avatar, AvatarProps } from '@cipriano99-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/cipriano99.png',
    alt: 'Samuel Cipriano'
  },
  
  argTypes: {
    src: {
      control: {
        type: 'text',
      }
    }
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
}
