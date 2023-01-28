import type { StoryObj, Meta } from "@storybook/react"
import { Heading, HeadingProps } from '@cipriano99-ignite-ui/react'

export default {
  title: 'Form/Heading',
  component: Heading,

  args: {
    children: 'Custom title'
  }

} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão heading será um `h2`, mas podemos alterar isso com a propriedade `as`.'
      }
    }
  }
}
