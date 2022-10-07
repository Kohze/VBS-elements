import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

const theme = create({
  base: 'light',
  brandTitle: 'Vaionex Base UI',
  brandUrl: 'https://github.com/Kohze/VBS-elements',
  colorPrimary: '#6089FF',
  colorSecondary: '#273142',
})

addons.setConfig({ theme })
