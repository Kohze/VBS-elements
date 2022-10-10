import React from 'react'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

const sizes = {
  sm: 'text-xs px-2.5 py-0.5',
  normal: 'text-sm px-3 py-1',
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
  backgroundColor,
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
      )}
      style={{ backgroundColor, color }}
    >
      {text || children}
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
  textColor: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
}

export default VBSBadge
