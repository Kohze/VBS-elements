import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

const variants = [
  'simple',
  'simple-with-breadcrumbs',
  'with-meta',
  'with-banner',
  'with-avatar',
  'with-avatar-and-stats',
  'with-meta-and-breadcrumbs',
  'card-with-avatar',
]

const themes = {
  light: { bg: 'bg-white', title: 'text-gray-900' },
  dark: { bg: 'bg-gray-800', title: 'text-white' },
}

const VBSPageHeading = ({
  variant,
  theme,
  children,
  title,
  titleClassName,
  actionButtons,
  actionsClassName,
  className,
  ...props
}) => {
  const getVariant = () => {
    switch (variant) {
      case 'simple':
        return (
          <div
            className={twMerge(
              'md:flex md:items-center md:justify-between p-8',
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
      case 'simple-with-breadcrumbs':
    }
  }

  return getVariant()
}

VBSPageHeading.defaultProps = {
  variant: 'simple',
  theme: 'light',
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
}

export default VBSPageHeading
