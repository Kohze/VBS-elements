import heroIconsNames from '../../../../assets/icons/hero-icons/names'
import VBSButton from '.'

export default {
  title: 'VBS Components/Application UI/Elemets/Button',
  component: VBSButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    iconName: {
      control: {
        type: 'select',
        options: heroIconsNames,
      },
    },
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
  text: 'VBSButton',
}
export const White = Template.bind({})
White.args = {
  size: 'md',
  variant: 'white',
  text: 'VBSButton',
}
export const Rounded = Template.bind({})
Rounded.args = {
  size: 'md',
  variant: 'rounded',
  text: 'VBSButton',
}
export const FullWidth = Template.bind({})
FullWidth.args = {
  size: 'md',
  variant: 'full-width',
  text: 'VBSButton',
}
export const WithOnlyIcon = Template.bind({})
WithOnlyIcon.args = {
  size: 'md',
  variant: 'rounded',
  iconName: 'ArrowLeftIcon',
  iconPosition: 'only',
  children: null,
}
