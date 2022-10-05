import { twMerge } from 'tailwind-merge'
import PropTypes from 'prop-types'

const sizes = {
  xs: 'text-xs px-2.5 py-1.5 ',
  sm: 'text-sm px-3 py-2',
  md: 'text-sm px-4 py-2',
  lg: 'text-base px-4 py-2',
  xl: 'text-base px-6 py-3',
}

const variants = {
  primary: '',
  white: 'bg-white text-gray-700 border border-gray-300',
  rounded: 'rounded-full',
  'full-width': 'w-full justify-center',
}

const VBSButton = ({
  size,
  variant,
  className,
  backgroundColor,
  color,
  iconName,
  iconPosition,
  children,
}) => {
  const mainStyle =
    'inline-flex text-white bg-indigo-600 items-center rounded border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'

  return (
    <button
      className={twMerge(mainStyle, sizes[size], variants[variant], className)}
      style={{
        backgroundColor,
        color,
      }}
    >
      {iconName && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {iconName && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  )
}

VBSButton.defaultProps = {
  size: 'md',
  variant: 'primary',
  children: 'VBSButton',
  backgroundColor: null,
  color: null,
}

VBSButton.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes)),
  variant: PropTypes.oneOf(Object.keys(variants)),
  className: PropTypes.string,
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
}

export default VBSButton
