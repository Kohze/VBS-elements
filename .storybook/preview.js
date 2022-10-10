import 'tailwindcss/tailwind.css'
import * as NextImage from 'next/image'
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
  options: {
    storySort: {
      method: 'alphabetical',
      locales: 'en-US',
    },
  },
}
