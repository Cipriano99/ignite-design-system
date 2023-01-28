import type { StoryObj, Meta } from "@storybook/react"
import { Text, TextProps } from '@cipriano99-ignite-ui/react'

export default {
  title: 'Form/Text',
  component: Text,

  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam enim sed repellat possimus officia quo quas cum, dicta doloribus temporibus sint magni facere eaque officiis, rerum, neque quod similique maxime.'
  }

} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  }
}
