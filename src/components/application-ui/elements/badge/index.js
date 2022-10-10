import React from 'react'
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

const VBSBadge = ({
  children,
  text,
  variant,
  size,
  kind,
  color,
  notification,
  backgroundColor,
  removeButton,
  onRemove,
  className,
}) => {
  const mainStyle =
    'inline-flex items-center px-2.5 py-0.5 text-xs font-medium leading-4'
  return (
    <span
      className={twMerge(
        mainStyle,
        variants[variant],
        sizes[size],
        kinds[kind],
        className,
        removeButton && size === 'sm' && 'pr-0',
        removeButton && size === 'normal' && 'pr-1',
      )}
      style={{ backgroundColor, color }}
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
      {text || children}

      {removeButton && (
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

VBSBadge.defaultProps = {
  variant: 'primary',
  size: 'normal',
  kind: 'rounded',
}

VBSBadge.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(variants)),
  size: PropTypes.oneOf(Object.keys(sizes)),
  kind: PropTypes.oneOf(Object.keys(kinds)),
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  notification: PropTypes.bool,
  notificationColor: PropTypes.string,
  removeButton: PropTypes.bool,
}

export default VBSBadge
