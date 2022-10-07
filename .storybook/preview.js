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
  // options: {
  //   storySort: (a, b) =>
  //     a[1].kind === b[1].kind
  //       ? 0
  //       : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  // },
}
