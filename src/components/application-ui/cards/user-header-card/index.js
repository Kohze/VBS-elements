import PropTypes from 'prop-types'
import { css } from '@emotion/css'
import Avatar from '../../elements/avatar'
import NextLink from 'next/link'
import { twMerge } from 'tailwind-merge'

const UserHeaderCard = ({
  user,
  cardList,
  cardTopText,
  avatarKind,
  avatarSize,
  titleClassName,
  className,
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
        className,
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
            />
            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
              <p className="text-sm font-medium text-gray-600">{cardTopText}</p>
              <p
                className={twMerge(
                  'text-xl font-bold text-gray-900 sm:text-2xl',
                  titleClassName,
                )}
              >
                {user?.name}
              </p>
              <p className="text-sm font-medium text-gray-600">{user?.role}</p>
            </div>
          </div>
          <div className="flex justify-center mt-5 sm:mt-0">
            <NextLink href={user?.link || '#'}>
              <a className="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
                View profile
              </a>
            </NextLink>
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
  titleClassName: PropTypes.string,
}

export default UserHeaderCard
