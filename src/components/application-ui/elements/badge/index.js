import React from 'react'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

const sizes = {
  sm: 'text-xs px-2.5 py-0.5',
  normal: 'text-sm px-3 py-1',
}

const variants = {
  primary: 'text-white bg-blue-600',
  secondary: 'text-white bg-gray-600',
  success: 'text-white bg-green-700',
  danger: 'text-white bg-red-600',
  warning: 'text-black bg-yellow-400',
  info: 'text-white bg-blue-800',
  outline: 'text-gray-600 bg-white border border-gray-600',
  light: 'text-gray-900 bg-gray-100',
  dark: 'text-white bg-gray-800',
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
