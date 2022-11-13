import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import NextLink from 'next/link'
import { twMerge } from 'tailwind-merge'
import { Avatar, Button } from '@/components/application-ui/elements'

const UserHeaderCard = ({
  user,
  cardList,
  cardTopText,
  buttonText,
  buttonVariant,
  avatarKind,
  avatarSize,
  classNames,
}) => {
  const listStyles = css`
    @media (min-width: 768px) {
      grid-template-columns: repeat(${cardList.length}, minmax(0, 1fr));
    }
  `
  return (
    <div
      className={twMerge(
        'overflow-hidden bg-white rounded-lg shadow',
        classNames?.main,
      )}
    >
      <h2 className="sr-only" id="profile-overview-title">
        User profile overview
      </h2>
      <div className="p-6 bg-white">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:space-x-5 sm:items-center">
            <Avatar
              imageSrc={user.imageSrc}
              size={avatarSize}
              kind={avatarKind}
              classNames={{
                main: classNames?.avatar,
              }}
            />
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="text-sm font-medium text-gray-600">{cardTopText}</p>
              <p
                className={twMerge(
                  'text-xl font-bold text-gray-900 sm:text-2xl',
                  classNames?.title,
                )}
              >
                {user?.name}
              </p>
              <p className="text-sm font-medium text-gray-600">{user?.role}</p>
            </div>
          </div>
          <div className="flex justify-center mt-5 sm:mt-0">
            <Button
              href={user?.link || '#'}
              className={classNames?.button}
              variant={buttonVariant}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
      {cardList.length > 0 && (
        <div
          className={twMerge(
            'grid grid-cols-1 border-t border-gray-200 divide-y divide-gray-200 bg-gray-50 sm:divide-y-0 sm:divide-x',
            listStyles,
          )}
        >
          {cardList?.map((item) => (
            <div
              key={item.label}
              className="px-6 py-5 text-sm font-medium text-center"
            >
              <span className="text-gray-900">{item.value}</span>{' '}
              <span className="text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

UserHeaderCard.defaultProps = {
  cardList: [],
  cardTopText: 'Welcome back,',
  buttonText: 'View profile',
  buttonVariant: 'outline',
  avatarKind: 'circular',
  avatarSize: '3xl',
  user: {},
}

UserHeaderCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    imageSrc: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  cardTopText: PropTypes.string,
  avatarKind: PropTypes.oneOf(['circular', 'rounded', 'square']),
  avatarSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']),
  buttonVariant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'outline',
    'dark',
  ]),
  buttonText: PropTypes.string,
  /**
   * Custom class names for the component
   */
  classNames: PropTypes.shape({
    main: PropTypes.string,
    title: PropTypes.string,
    button: PropTypes.string,
    avatar: PropTypes.string,
  }),
}

export default UserHeaderCard
