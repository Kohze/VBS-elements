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
export const White = Template.bind({})
White.args = {
  size: 'md',
  variant: 'white',
  children: 'VBSButton',
}
export const WithLeadingIcon = Template.bind({})
WithLeadingIcon.args = {
  size: 'md',
  variant: 'withLeadingIcon',
  children: 'VBSButton',
}
export const WithTrailingIcon = Template.bind({})
WithTrailingIcon.args = {
  size: 'md',
  variant: 'withTrailingIcon',
  children: 'VBSButton',
}
export const Rounded = Template.bind({})
Rounded.args = {
  size: 'md',
  variant: 'rounded',
  children: 'VBSButton',
}
export const CircularIcon = Template.bind({})
CircularIcon.args = {
  size: 'md',
  variant: 'circularIcon',
  children: 'VBSButton',
}
export const FullWidth = Template.bind({})
FullWidth.args = {
  size: 'md',
  variant: 'fullWidth',
  children: 'VBSButton',
}
