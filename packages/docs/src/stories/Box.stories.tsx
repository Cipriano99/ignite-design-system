import type { StoryObj, Meta } from "@storybook/react"
import { Box, BoxProps, Text } from '@cipriano99-ignite-ui/react'

export default {
  title: 'Form/Box',
  component: Box,

  args: {
    children: (
      <>
        <Text>Testando elemento BOX</Text>
      </>
    )
  }

} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
