import type { StoryObj, Meta } from "@storybook/react"
import { Box, BoxProps } from '@cipriano99-ignite-ui/react'

export default {
  title: 'Form/Box',
  component: Box,

  args: {
    children: (
      <>
        <span>Testando elemento BOX</span>
      </>
    )
  }

} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
