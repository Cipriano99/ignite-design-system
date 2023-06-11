import type { StoryObj, Meta } from "@storybook/react"
import { Text, TextProps } from '@cipriano99-ignite-ui/react'

export default {
  title: 'Form/Text',
  component: Text,

  args: {
    size: 'md',
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam enim sed repellat possimus officia quo quas cum, dicta doloribus temporibus sint magni facere eaque officiis, rerum, neque quod similique maxime.'
  },

  argTypes: {
    size: {
      options: [
        'xxs','xs','sm','md','lg','xl','2xl','3xl','4xl','5xl','6xl','7xl','8xl','9xl'
      ],
      control: {
        type: 'inline-radio'
      },
    },
  },

} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  }
}
