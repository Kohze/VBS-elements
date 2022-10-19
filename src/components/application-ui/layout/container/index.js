import { twMerge } from 'tailwind-merge'
import PropTypes from 'prop-types'

const variants = {
  'full-width': 'mx-auto max-w-7xl sm:px-6 lg:px-8',
  padded: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
  'padded-full-mobile': 'container mx-auto sm:px-6 lg:px-8',
  'breakpoint-padded': 'container mx-auto px-4 sm:px-6 lg:px-8',
  'narrow-padded': 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
}

const narrowSizes = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
  full: 'max-w-full',
}

const VBSContainer = ({ variant, children, className, narrowSize }) => {
  if (variant === 'narrow-padded') {
    return (
      <div className={twMerge(variants['narrow-padded'], className)}>
        <div className={twMerge('max-w-3xl mx-auto', narrowSizes[narrowSize])}>
          {children}
        </div>
      </div>
    )
  }

  return (
    <div
      className={twMerge(
        ' mx-auto sm:px-6 lg:px-8',
        variants[variant],
        className,
      )}
    >
      {children}
    </div>
  )
}

VBSContainer.defaultProps = {
  variant: 'padded',
}

VBSContainer.propTypes = {
  variant: PropTypes.oneOf(Object.keys(variants)),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  narrowSize: PropTypes.oneOf(Object.keys(narrowSizes)),
}

export default VBSContainer
