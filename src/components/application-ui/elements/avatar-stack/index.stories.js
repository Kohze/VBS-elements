import VBSAvatarStack from '@/components/application-ui/elements/avatar-stack'

export default {
  title: 'VBS Components/Application UI/Elements/Avatar Stack',
  component: VBSAvatarStack,
}

const Template = (args) => <VBSAvatarStack {...args} />

export const Default = Template.bind({})
Default.args = {
  size: 'sm',
  variant: 'circular',
  items: [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'John Cooper',
    },
    {
      imageSrc: '',
      name: 'Johnny Keats',
    },
    {
      imageSrc: '',
      name: '',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Brian Cooper',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      name: 'Brian Cooper',
    },
  ],
}
