// interaction example

// import VBSButton from '.'
// import { within, userEvent } from '@storybook/testing-library'
// import { expect } from '@storybook/jest'

// export default {
//   title: 'Actions/Button',
//   component: VBSButton,
// }

// const Template = (args) => <VBSButton text="Click Me" {...args} />

// export const OnlyClick = Template.bind({})
// OnlyClick.play = async ({ canvasElement, args }) => {
//   const canvas = within(canvasElement)
//   const button = await canvas.findByRole('button', { name: 'Click Me' })
//   await userEvent.click(button)
// }
