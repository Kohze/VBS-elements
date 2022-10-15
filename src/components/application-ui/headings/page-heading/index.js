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

const themes = ['light', 'dark']

const VBSPageHeading = ({
  variant,
  theme,
  children,
  title,
  titleClassName,
  actionButtons,
  actionsClassName,
  ...props
}) => {
  const getVariant = () => {
    switch (variant) {
      case 'simple':
        return (
          <>
            <div className="flex-1 min-w-0">
              <h2
                className={twMerge(
                  'text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight',
                  titleClassName,
                )}
              >
                {title}
              </h2>
            </div>
            <div
              className={twMerge(
                'flex gap-4 mt-4 md:mt-0 md:ml-4',
                actionsClassName,
              )}
            >
              {actionButtons({ theme })}
            </div>
          </>
        )
    }
  }

  return (
    <div className="md:flex md:items-center md:justify-between">
      {getVariant()}
    </div>
  )
}

VBSPageHeading.defaultProps = {
  variant: 'simple',
  theme: 'light',
}

VBSPageHeading.propTypes = {
  variant: PropTypes.oneOf(variants),
  theme: PropTypes.oneOf(themes),
  title: PropTypes.string,
  titleClassName: PropTypes.string,
  actionButtons: PropTypes.node,
  actionButtonsClassName: PropTypes.string,
}

export default VBSPageHeading
