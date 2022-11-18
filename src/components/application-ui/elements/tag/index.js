import { css } from '@emotion/css'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'
import { Icon } from '@/components/application-ui/elements'
import NextLink from 'next/link'

const sizes = {
  xs: 'text-xs px-1',
  sm: 'text-xs px-2.5 py-0.5',
  md: 'text-sm px-3 py-0.5',
  lg: 'text-base px-4 py-1',
}

const variants = {
  primary: 'bg-blue-100 text-blue-800 border-blue-300',
  secondary: 'bg-gray-600 text-gray-100 border-gray-800',
  success: 'bg-green-100 text-green-800 border-green-300',
  danger: 'bg-red-100 text-red-800 border-red-300',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  info: 'bg-blue-300 text-blue-900 border-blue-300',
  light: 'bg-gray-100 text-gray-800 border-gray-300',
  dark: 'bg-gray-800 text-gray-100 border-gray-800',
  outline: 'border border-gray-300 text-gray-800 bg-transparent',
}

const kinds = {
  square: 'rounded-none',
  rounded: 'rounded-md',
  circular: 'rounded-full',
}

const Tag = ({
  text,
  href,
  onlyText,
  iconName,
  iconColor,
  textColor,
  variant,
  size,
  kind,
  color,
  backgroundColor,
  borderColor,
  className,
  ...props
}) => {
  const mainStyle =
    'relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm'

  const additonalStyles = css`
    background-color: ${backgroundColor};
    color: ${color};
  `

  const renderNotification = () => {
    if (iconName) {
      return <Icon iconName={iconName} size="sm" className="flex-shrink-0" />
    }

    if (onlyText) {
      return null
    }

    return (
      <svg
        className="-ml-0.5 mr-1.5 h-2 w-2"
        fill="currentColor"
        viewBox="0 0 8 8"
      >
        <circle cx={4} cy={4} r={3} />
      </svg>
    )
  }

  return (
    <NextLink legacyBehavior href={href || ''}>
      <a
        className={twMerge(
          mainStyle,
          !href && 'cursor-default',
          variants[variant],
          sizes[size],
          kinds[kind],
          className,
          additonalStyles,
        )}
        style={{ ...props.style, borderColor }}
      >
        {renderNotification()}
        <span className={'ml-1 font-medium'} style={{ color: textColor }}>
          {text}
        </span>
      </a>
    </NextLink>
  )
}

Tag.defaultProps = {
  variant: 'outline',
  size: 'md',
  kind: 'circular',
  href: '',
  iconName: '',
}

Tag.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  textColor: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(variants)),
  size: PropTypes.oneOf(Object.keys(sizes)),
  kind: PropTypes.oneOf(Object.keys(kinds)),
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  className: PropTypes.string,
}

export default Tag
