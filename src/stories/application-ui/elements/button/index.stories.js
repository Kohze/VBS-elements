import heroIconsNames from '@/assets/icons/hero-icons/names'
import VBSButton from '@/components/application-ui/elements/button'

export default {
  title: 'VBS Components/Application UI/Elements/Button',
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
  variant: 'default',
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
export const WithIcon = Template.bind({})
WithIcon.args = {
  size: 'md',
  variant: 'default',
  text: 'VBSButton',
  iconName: 'ArrowLeftIcon',
  iconPosition: 'left',
  iconType: 'solid',
}
export const WithOnlyIcon = Template.bind({})
WithOnlyIcon.args = {
  size: 'md',
  variant: 'rounded',
  iconName: 'PlusIcon',
  iconPosition: 'only',
  children: null,
}
export const linkButton = Template.bind({})
linkButton.args = {
  size: 'md',
  variant: 'rounded',
  text: 'Go to Home Page',
  children: null,
  href: '/',
}
