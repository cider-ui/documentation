import { Callout } from '@/components/Callout'
import ComponentsWrapper from '@/components/ComponentsWrapper'
import Button from '@cider-ui/cider-ui/dist/components/Button/Button.js'
import '@cider-ui/cider-ui/dist/styles/main.css'
import { BellAlertIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline"

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
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  'components-wrapper': {
    render: ComponentsWrapper,
    selfClosing: false,
  },
  'cider-button': {
    selfClosing: true,
    render: ({ rightIcon, leftIcon, ...args }) => (
      <Button
        rightIcon={rightIcon && <PaperAirplaneIcon />}
        leftIcon={leftIcon && <BellAlertIcon />}
        {...args}
      />
    ),
    attributes: {
      label: { type: String },
      filled: { type: Boolean },
      style: { type: String },
      size: { type: String },
      leftIcon: { type: String },
      rightIcon: { type: String },
    },
  },
}

export default tags
