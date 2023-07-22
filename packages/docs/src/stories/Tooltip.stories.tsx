import type { StoryObj, Meta } from "@storybook/react"
import { Tooltip, TooltipProps } from '@cipriano99-ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,

  args: {
    day: 21,
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
