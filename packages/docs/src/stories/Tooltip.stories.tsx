import type { StoryObj, Meta } from "@storybook/react"
import { Box, Text, Tooltip, TooltipProps } from '@cipriano99-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,

  args: {
    day: 12,
    month: 'Julho',
  },

  decorators: [
    (Story) => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '$colors$gray200' }} >
          {Story()}
        </div>
    )
  ],
  
  argTypes: {
    src: {}
  }
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
