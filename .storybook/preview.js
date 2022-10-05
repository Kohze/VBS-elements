import * as NextImage from 'next/image'
import '../src/styles/globals.css'
import tailwindColors from './colors.json'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

// deoptimize Next.js's default Image component to use next/image
const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  colorPicker: {
    palettes: [
      {
        name: 'Your first palette name',
        palette: tailwindColors,
      },
    ],
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}
