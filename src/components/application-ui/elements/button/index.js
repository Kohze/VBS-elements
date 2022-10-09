import { twMerge } from 'tailwind-merge'
import PropTypes from 'prop-types'
import NextLink from 'next/link'
import VBSIcon from '../icon'

export const sizes = {
  xs: 'text-xs px-2.5 py-1',
  sm: 'text-sm px-3 py-2',
  md: 'text-sm px-4 py-2',
  lg: 'text-base px-4 py-2',
  xl: 'text-base px-6 py-3',
}

export const variants = {
  primary: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
  secondary: 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
  success: 'bg-green-700 hover:bg-green-700 focus:ring-green-500',
  danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
  warning: 'text-black bg-yellow-400 hover:bg-yellow-700 focus:ring-yellow-500',
  info: 'bg-blue-800 hover:bg-blue-700 focus:ring-blue-700',
  light: 'text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-gray-100',
  outline:
    'text-gray-600 bg-white border border-gray-600 hover:bg-gray-50 focus:ring-gray-500',
  dark: 'bg-gray-800 hover:bg-gray-900 focus:ring-gray-700',
}

export const kinds = {
  square: 'rounded-none',
  rounded: 'rounded-md',
  circular: 'rounded-full',
}

const VBSButton = ({
  size,
  variant,
  kind,
  disabled,
  fullWidth,
  className,
  backgroundColor,
  color,
  iconName,
  iconPosition,
  iconType,
  text,
  href,
  children,
  onClick,
  ...props
}) => {
  const isChildrenOrText = text || children
  const mainStyle =
    'inline-flex text-white items-center border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2'

  const paddingForIconOnly = () => {
    if (size === 'xs') {
      return 'p-1'
    }
    if (size === 'sm') {
      return 'p-2'
    }
    if (size === 'md') {
      return 'p-3'
    }
    if (size === 'lg') {
      return 'p-4'
    }
    if (size === 'xl') {
      return 'p-5'
    }

    return ''
  }

  const renderChildren = () => {
    if (!!iconName) {
      if (iconPosition === 'left') {
        return (
          <>
            <span className={isChildrenOrText ? 'mr-2' : ''}>
              <VBSIcon iconName={iconName} iconType={iconType} />
            </span>
            {text || children}
          </>
        )
      }
      if (iconPosition === 'right') {
        return (
          <>
            {text || children}
            <span className={isChildrenOrText ? 'ml-2' : ''}>
              <VBSIcon iconName={iconName} iconType={iconType} />
            </span>
          </>
        )
      }
      if (iconPosition === 'only') {
        return <VBSIcon iconName={iconName} iconType={iconType} />
      }
    }
    return text || children
  }

  const renderButton = () => {
    if (href) {
      return (
        <NextLink href={href}>
          <a
            className={twMerge(
              mainStyle,
              sizes[size],
              variants[variant],
              kinds[kind],
              fullWidth && 'w-full justify-center',
              iconPosition === 'only' ? paddingForIconOnly() : '',
              disabled && 'opacity-50 pointer-events-none touch-none',
              className,
            )}
            style={{ backgroundColor, color }}
            {...props}
          >
            {renderChildren()}
          </a>
        </NextLink>
      )
    }

    return (
      <button
        className={twMerge(
          mainStyle,
          sizes[size],
          variants[variant],
          kinds[kind],
          fullWidth && 'w-full justify-center',
          iconPosition === 'only' ? paddingForIconOnly() : '',
          disabled && 'opacity-50 pointer-events-none touch-none',
          className,
        )}
        style={{
          backgroundColor,
          color,
        }}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {renderChildren()}
      </button>
    )
  }

  return renderButton()
}

VBSButton.defaultProps = {
  size: 'md',
  variant: 'primary',
  kind: 'rounded',
  fullWidth: false,
  iconPosition: 'left',
  iconType: 'solid',
}

VBSButton.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes)),
  variant: PropTypes.oneOf(Object.keys(variants)),
  kind: PropTypes.oneOf(Object.keys(kinds)),
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  iconName: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right', 'only']),
  iconType: PropTypes.oneOf(['solid', 'outline']),
  href: PropTypes.string,
  onClick: PropTypes.func,
}

export default VBSButton
