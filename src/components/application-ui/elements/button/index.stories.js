import VBSButton from '.'

export default {
  title: 'VBS Components/Application UI/Elemets/Button',
  component: VBSButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
  parameters: {
    colorPicker: {
      applyColorTo: ['backgroundColor', 'color'],
    },
  },
}

const Template = (args) => <VBSButton {...args} />
export const Primary = Template.bind({})
Primary.args = {
  size: 'md',
  variant: 'primary',
  children: 'VBSButton',
}
export const Secondary = Template.bind({})
Secondary.args = {
  size: 'md',
  variant: 'secondary',
  children: 'VBSButton',
}
export const White = Template.bind({})
White.args = {
  size: 'md',
  variant: 'white',
  children: 'VBSButton',
}
