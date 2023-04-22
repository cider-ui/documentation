import { Callout } from '@/components/Callout'
import ComponentsWrapper from '@/components/ComponentsWrapper'
import { BellAlertIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline"

import Input from '@cider-ui/cider-ui/dist/components/Input/Input.js'
import Button from '@cider-ui/cider-ui/dist/components/Button/Button.js'

import '@cider-ui/cider-ui/dist/styles/main.css'

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  'components-wrapper': {
    render: ComponentsWrapper,
    selfClosing: false,
  },
  'cider-button': {
    selfClosing: true,
    render: ({ rightIcon, leftIcon, filled, ...args }) => (
      <Button
        rightIcon={rightIcon && <PaperAirplaneIcon />}
        leftIcon={leftIcon && <BellAlertIcon />}
        filled={!!filled}
        {...args}
      />
    ),
    attributes: {
      label: { type: String },
      filled: { type: String },
      style: { type: String },
      size: { type: String },
      leftIcon: { type: String },
      rightIcon: { type: String },
    },
  },
  'cider-input': {
    render: (args) => <Input {...args} />,
    selfClosing: true,
    attributes: {
      style: { type: String },
      placeholder: { type: String }
    }
  }
}

export default tags
