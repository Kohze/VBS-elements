import heroIconsNames from '@/assets/icons/hero-icons/names'
import VBSIcon from '@/components/application-ui/elements/icon'

export default {
  title: 'VBS Components/Application UI/Elements/Icon',
  component: VBSIcon,
  argTypes: {
    iconName: {
      control: {
        type: 'select',
        options: heroIconsNames,
      },
    },
  },
}

const Template = (args) => <VBSIcon {...args} />
export const Sample = Template.bind({})
Sample.args = {
  iconName: 'ArrowLeftIcon',
}
