import { css } from '@emotion/css'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

const sizes = {
  sm: 'text-xs px-2.5 py-0.5',
  normal: 'text-sm px-3 py-0.5',
}

const variants = {
  primary: 'bg-blue-100 text-blue-800',
  secondary: 'bg-gray-800 text-gray-100',
  success: 'bg-green-100 text-green-800',
  danger: 'bg-red-100 text-red-800',
  warning: 'bg-yellow-100 text-yellow-800',
  info: 'bg-blue-300 text-blue-900',
  light: 'bg-gray-100 text-gray-800',
  dark: 'bg-gray-800 text-gray-100',
  outline: 'border border-gray-300 text-gray-800',
}

const kinds = {
  square: 'rounded-none',
  rounded: 'rounded-md',
  circular: 'rounded-full',
}

const Badge = ({
  text,
  variant,
  size,
  kind,
  color,
  notification,
  backgroundColor,
  withRemove,
  onRemove,
  className,
  ...props
}) => {
  const mainStyle =
    'inline-flex items-center px-2.5 py-0.5 text-xs font-medium leading-4'

  const additonalStyles = css`
    background-color: ${backgroundColor};
    color: ${color};
  `

  return (
    <span
      className={twMerge(
        mainStyle,
        variants[variant],
        sizes[size],
        kinds[kind],
        className,
        withRemove && size === 'sm' && 'pr-0',
        withRemove && size === 'normal' && 'pr-1',
        additonalStyles,
      )}
      style={{ ...props.style }}
    >
      {notification && (
        <svg
          className="-ml-0.5 mr-1.5 h-2 w-2"
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx={4} cy={4} r={3} />
        </svg>
      )}
      {text}

      {withRemove && (
        <button
          type="button"
          className="ml-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:bg-indigo-500 focus:text-white focus:outline-none"
          onClick={onRemove}
        >
          <span className="sr-only">Remove button</span>
          <svg
            className="w-2 h-2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 8 8"
          >
            <path
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M1 1l6 6m0-6L1 7"
            />
          </svg>
        </button>
      )}
    </span>
  )
}

Badge.defaultProps = {
  variant: 'primary',
  size: 'normal',
  kind: 'rounded',
}

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(Object.keys(variants)),
  size: PropTypes.oneOf(Object.keys(sizes)),
  kind: PropTypes.oneOf(Object.keys(kinds)),
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  notification: PropTypes.bool,
  withRemove: PropTypes.bool,
  onRemove: PropTypes.func,
}

export default Badge
