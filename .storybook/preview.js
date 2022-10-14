import 'tailwindcss/tailwind.css'
import * as NextImage from 'next/image'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import tailwindColors from '@/constants/colors.json'

const customViewports = {
  tabletSmall: {
    name: 'Tablet Small & Portrait (600px min width)',
    styles: {
      width: '600px',
      height: '801px',
    },
  },
  tabletLarge: {
    name: 'Tablet Large & Landscape (960px min width)',
    styles: {
      width: '960px',
      height: '768px',
    },
  },
  desktop: {
    name: 'Desktop (1200px min width)',
    styles: {
      width: '1200px',
      height: '1024px',
    },
  },
}

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
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...customViewports,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      locales: 'en-US',
      order: ['Introduction', 'Application UI', 'Pages'],
    },
  },
}
