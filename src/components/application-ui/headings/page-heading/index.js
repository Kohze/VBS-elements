import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'
import VBSMetaList from '../../lists/meta-list'
import VBSBreadcrumb from '../../navigation/breadcrumb'
import { css } from '@emotion/css'
import VBSUserHeaderCard from '../../cards/user-header-card'
import VBSAvatar from '../../elements/avatar'

const variants = ['simple', 'banner', 'card']

const themes = {
  light: { bg: 'bg-white', title: 'text-gray-900' },
  dark: { bg: 'bg-gray-800', title: 'text-white' },
}

const VBSPageHeading = ({
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
  cardList,
  cardTopText,
  avatarKind,
  avatarSize,
  description,
}) => {
  const renderSimple = () => (
    <div
      className={twMerge(
        'md:flex md:items-center md:justify-between p-4',
        (breadcrumbs.length > 0 || metas.length > 0) && 'p-0',
        themes[theme].bg,
        className,
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
      <VBSUserHeaderCard
        user={user}
        cardList={cardList}
        cardTopText={cardTopText}
        avatarKind={avatarKind}
        avatarSize={avatarSize}
      />
    )
  }

  const renderWithAvatar = () => {
    return (
      <div className="md:flex md:items-center md:justify-between md:space-x-5">
        <div className="flex items-start space-x-5">
          <VBSAvatar
            imageSrc={user.imageSrc}
            size={avatarSize}
            kind={avatarKind}
          />
          <div className="pt-1.5">
            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
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

  const renderBanner = () => {}

  const getVariant = () => {
    switch (variant) {
      case 'simple':
        return (
          <div>
            {breadcrumbs.length > 0 && (
              <div className="mb-2">
                <VBSBreadcrumb pages={breadcrumbs} />
              </div>
            )}
            {renderSimple()}
            {metas.length > 0 && (
              <div className="mt-1">
                <VBSMetaList items={metas} />
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

VBSPageHeading.defaultProps = {
  variant: 'simple',
  theme: 'light',
  metas: [],
  breadcrumbs: [],
  cardList: [],
  user: {},
  cardTopText: '',
  avatarKind: 'circular',
  avatarSize: 'lg',
}

VBSPageHeading.propTypes = {
  variant: PropTypes.oneOf(variants),
  theme: PropTypes.oneOf(Object.keys(themes)),
  title: PropTypes.string,
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
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ),
  cardTopText: PropTypes.string,
  avatarKind: PropTypes.oneOf(['circular', 'rounded', 'square']),
  avatarSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']),
  description: PropTypes.string,
}

export default VBSPageHeading
