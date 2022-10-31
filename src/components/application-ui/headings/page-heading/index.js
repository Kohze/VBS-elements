import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'
import MetaList from '../../lists/meta-list'
import Breadcrumb from '../../navigation/breadcrumb'
import UserHeaderCard from '../../cards/user-header-card'
import Avatar from '../../elements/avatar'
import Image from 'next/image'

const variants = ['simple', 'banner', 'card']

const themes = {
  light: { bg: 'bg-white', title: 'text-gray-900', current: 'text-gray-500' },
  dark: { bg: 'bg-gray-800', title: 'text-white', current: 'text-gray-500' },
}

const PageHeading = ({
  variant,
  theme,
  title,
  titleClassName,
  actionButtons,
  actionsClassName,
  className,
  breadcrumbs,
  metas,
  user,
  description,
  cardList,
  cardTopText,
  avatarKind,
  avatarSize,
  avatarPosition,
  bannerHeight,
  bannerClassName,
}) => {
  const renderSimple = () => (
    <div
      className={twMerge(
        'md:flex md:items-center md:justify-between p-4',
        (breadcrumbs.length > 0 || metas.length > 0) && 'p-0',
      )}
    >
      <div className="flex-1 min-w-0">
        <h2
          className={twMerge(
            'text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight',
            themes[theme].title,
            titleClassName,
          )}
        >
          {title}
        </h2>
      </div>
      {actionButtons && (
        <div
          className={twMerge(
            'flex gap-4 mt-4 md:mt-0 md:ml-4',
            actionsClassName,
          )}
        >
          {actionButtons({ theme })}
        </div>
      )}
    </div>
  )

  const renderCard = () => {
    return (
      <UserHeaderCard
        user={user}
        cardList={cardList}
        cardTopText={cardTopText}
        avatarKind={avatarKind}
        avatarSize={avatarSize}
        className={className}
        titleClassName={titleClassName}
      />
    )
  }

  const renderWithAvatar = () => {
    return (
      <div
        className={twMerge(
          'md:flex md:items-center md:justify-between md:space-x-5',
          themes[theme].bg,
          className,
        )}
      >
        <div className="flex items-start space-x-5">
          <Avatar
            imageSrc={user.imageSrc}
            size={avatarSize}
            kind={avatarKind}
          />
          <div className="pt-1.5">
            <h1
              className={twMerge(
                'text-2xl font-bold text-gray-900',
                themes[theme].title,
                titleClassName,
              )}
            >
              {user.name}
            </h1>
            <p className="text-sm font-medium text-gray-500">
              {description || user.role}
            </p>
          </div>
        </div>
        {actionButtons && (
          <div className="flex flex-col-reverse mt-6 space-y-4 space-y-reverse justify-stretch sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
            {actionButtons()}
          </div>
        )}
      </div>
    )
  }

  const renderBanner = () => {
    return (
      <div>
        <div
          className={twMerge(
            'relative z-0 w-full h-32 overflow-hidden rounded-lg group bg-gradient-to-tr opacity-80 from-gray-600 to-gray-300 lg:h-60',
            bannerClassName,
          )}
          style={{ height: bannerHeight }}
        >
          <Image
            src={user?.backgroundImage}
            alt={user?.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="z-20 max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div
            className={twMerge(
              'z-20 -mt-12 sm:-mt-16 items-end sm:space-x-5',
              avatarPosition === 'right' &&
                'flex sm:flex-row-reverse flex-col ',
              avatarPosition === 'left' && 'sm:flex',
            )}
          >
            <Avatar
              imageSrc={user.imageSrc}
              className="w-16 h-16 border-4 border-white sm:h-32 sm:w-32"
            />
            <div
              className={twMerge(
                'mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1',
                avatarPosition === 'right' &&
                  'sm:justify-start w-full text-end',
              )}
            >
              <div className="flex-1 min-w-0 mt-6 sm:hidden md:block">
                <h1 className="text-2xl font-bold text-gray-900 truncate">
                  {user.name}
                </h1>
              </div>
              {actionButtons && (
                <div className="flex flex-col mt-6 space-y-3 justify-stretch sm:flex-row sm:space-y-0 sm:space-x-4">
                  {actionButtons()}
                </div>
              )}
            </div>
          </div>
          <div
            className={twMerge(
              'flex-1 hidden min-w-0 mt-6 sm:block md:hidden',
              avatarPosition === 'right' && 'text-end',
            )}
          >
            <h1 className="text-2xl font-bold text-gray-900 truncate">
              {user.name}
            </h1>
          </div>
        </div>
      </div>
    )
  }

  const getVariant = () => {
    switch (variant) {
      case 'simple':
        return (
          <div className={twMerge(themes[theme].bg, className)}>
            {breadcrumbs.length > 0 && (
              <div className="mb-2">
                <Breadcrumb
                  pages={breadcrumbs}
                  currentClassName={themes[theme].current}
                />
              </div>
            )}
            {renderSimple()}
            {metas.length > 0 && (
              <div className="mt-1">
                <MetaList items={metas} />
              </div>
            )}
          </div>
        )
      case 'banner':
        return renderBanner()
      case 'card':
        return renderCard()
      case 'with-avatar':
        return renderWithAvatar()
    }
  }

  return getVariant()
}

PageHeading.defaultProps = {
  variant: 'simple',
  theme: 'light',
  metas: [],
  breadcrumbs: [],
  cardList: [],
  user: {},
  cardTopText: '',
  avatarKind: 'circular',
  avatarPosition: 'left',
}

PageHeading.propTypes = {
  variant: PropTypes.oneOf(variants),
  theme: PropTypes.oneOf(Object.keys(themes)),
  title: PropTypes.string.isRequired,
  titleClassName: PropTypes.string,
  /**
    actionButtons is a render prop for to use to render the action buttons
    then you can add your own logic to the buttons
    check the examples for see how to use it
   */
  actionButtons: PropTypes.func,
  actionButtonsClassName: PropTypes.string,
  className: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string,
      current: PropTypes.bool,
    }),
  ),
  metas: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      iconName: PropTypes.string.isRequired,
    }),
  ),
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }),
  description: PropTypes.string,
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ),
  cardTopText: PropTypes.string,
  avatarKind: PropTypes.oneOf(['circular', 'rounded', 'square']),
  avatarSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']),
  avatarPosition: PropTypes.oneOf(['left', 'right']),
  bannerHeight: PropTypes.number,
  bannerClassName: PropTypes.string,
}

export default PageHeading
