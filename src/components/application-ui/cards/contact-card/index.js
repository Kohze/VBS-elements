import { CardFooterList } from '@/components/application-ui/lists'
import PropTypes from 'prop-types'
import { Avatar, Tag } from '@/components/application-ui/elements'
import { twMerge } from 'tailwind-merge'
import EmptyCard from '../empty-card'

const ContactCard = ({
  user,
  avatarSize,
  avatarPosition,
  avatarKind,
  classNames,
}) => {
  const footerInfo = [
    {
      iconName: 'envelope',
      label: 'Email',
      href: `mailto:${user?.email}`,
    },
    { iconName: 'phone', label: 'Call', href: `tel:${user?.phone}` },
  ]

  const renderVerticalContent = () => {
    return (
      <div
        className={twMerge(
          'flex flex-1 gap-4 p-8 text-center bg-white',
          avatarPosition === 'top' && 'flex-col',
          avatarPosition === 'bottom' && 'flex-col-reverse',
        )}
      >
        <Avatar
          imageSrc={user?.imageSrc}
          personName={user?.name}
          size={avatarSize}
          kind={avatarKind}
          classNames={{
            main: 'mx-auto',
          }}
        />
        <div>
          <h3
            className={twMerge(
              'text-sm font-medium text-gray-900',
              classNames?.name,
            )}
          >
            {user.name}
          </h3>
          <dl className="flex flex-col justify-between flex-grow mt-1">
            <dt className="sr-only">Title</dt>
            <dd className={twMerge('text-sm text-gray-500', classNames?.title)}>
              {user.title}
            </dd>
            <dt className="sr-only">Role</dt>
            <dd className="mt-3">
              <Tag
                text={user?.role}
                variant={user?.tagVariant || 'success'}
                size="xs"
                onlyText
                className={twMerge('border-none', classNames?.tag)}
              />
            </dd>
          </dl>
        </div>
      </div>
    )
  }

  const renderHorizontalContent = () => {
    return (
      <div
        className={twMerge(
          'flex items-center justify-between w-full p-6 gap-6 bg-white',
          avatarPosition === 'right' && 'flex-row',
          avatarPosition === 'left' && 'flex-row-reverse',
        )}
      >
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="text-sm font-medium text-gray-900 truncate">
              {user?.name}
            </h3>
            <Tag
              text={user?.role}
              variant={user?.tagVariant || 'success'}
              size="xs"
              onlyText
              className={twMerge('border-none', classNames?.tag)}
            />
          </div>
          <p className="mt-1 text-sm text-gray-500 truncate">{user?.title}</p>
        </div>
        <Avatar
          imageSrc={user?.imageSrc}
          personName={user?.name}
          size={avatarSize}
          kind={avatarKind}
        />
      </div>
    )
  }

  const renderContent = () => {
    if (avatarPosition === 'top' || avatarPosition === 'bottom') {
      return renderVerticalContent()
    }

    if (avatarPosition === 'left' || avatarPosition === 'right') {
      return renderHorizontalContent()
    }
  }

  return (
    <EmptyCard className={twMerge('p-0', classNames?.card)}>
      {renderContent()}
      <div>
        <CardFooterList
          list={footerInfo}
          classNames={{
            main: 'bg-white border-t border-gray-200',
            icon: twMerge('text-gray-400', classNames?.footerListIcon),
            item: twMerge('text-gray-400', classNames?.footerListItem),
          }}
        />
      </div>
    </EmptyCard>
  )
}

ContactCard.defaultProps = {
  avatarSize: '2xl',
  avatarPosition: 'right',
}

ContactCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    title: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    imageSrc: PropTypes.string,
    tagVariant: PropTypes.oneOf([
      'primary',
      'secondary',
      'success',
      'danger',
      'warning',
      'info',
      'light',
      'dark',
      'outline',
    ]),
  }).isRequired,
  avatarSize: PropTypes.oneOf([
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
  ]),
  avatarPosition: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  avatarKind: PropTypes.oneOf(['circular', 'rounded', 'square']),
  classNames: PropTypes.shape({
    card: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    tag: PropTypes.string,
    footerListIcon: PropTypes.string,
    footerListItem: PropTypes.string,
  }),
}

export default ContactCard
