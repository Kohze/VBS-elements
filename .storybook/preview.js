import * as NextImage from 'next/image'
import '@/styles/globals.css'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import tailwindColors from '@/constants/colors.json'

// deoptimize Next.js's default Image component to use next/image
const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewMode: 'docs',
  layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  colorPicker: {
    palettes: [
      {
        name: 'Tailwind Colors',
        palette: tailwindColors,
      },
    ],
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  docs: {
    transformSource: (source) =>
      source
        .replace(/<!--\?lit\$[0-9]+\$-->|<!--\??-->/g, '')
        // Clean empty boolean attribute values
        .replace(/=\"\"/g, ''),
  },
  options: {
    storySort: {
      method: 'alphabetical',
      locales: 'en-US',
    },
  },
}
