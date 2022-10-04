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
  primary: 'bg-indigo-600',
  secondary: 'bg-indigo-200 text-indigo-700',
  white: 'bg-white text-gray-700 border border-gray-300',
  withLeadingIcon: 'bg-indigo-600',
  withTrailingIcon: 'bg-indigo-600',
  rounded: 'bg-indigo-600 rounded-full',
  circular: 'bg-indigo-600 rounded-full',
}

const VBSButton = ({
  size,
  variant,
  className,
  backgroundColor,
  color,
  children,
}) => {
  const mainStyle =
    'inline-flex text-white items-center rounded border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'

  return (
    <button
      className={twMerge(mainStyle, sizes[size], variants[variant], className)}
      style={{
        backgroundColor,
        color,
      }}
    >
      {children}
    </button>
  )
}

VBSButton.defaultProps = {
  size: 'md',
  variant: 'primary',
  children: 'VBSButton',
}

VBSButton.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes)),
  variant: PropTypes.oneOf(Object.keys(variants)),
  className: PropTypes.string,
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
}

export default VBSButton
