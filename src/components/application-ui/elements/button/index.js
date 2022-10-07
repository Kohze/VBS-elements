import { twMerge } from 'tailwind-merge'
import PropTypes from 'prop-types'
import NextLink from 'next/link'
import VBSIcon from '../icon'

const sizes = {
  xs: 'text-xs px-2.5 py-1',
  sm: 'text-sm px-3 py-2',
  md: 'text-sm px-4 py-2',
  lg: 'text-base px-4 py-2',
  xl: 'text-base px-6 py-3',
}

const variants = {
  default: '',
  outline: 'bg-white text-gray-700 border border-gray-300',
}

const kinds = {
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
  ...props
}) => {
  const isChildrenOrText = text || children
  const mainStyle =
    'inline-flex text-white bg-indigo-600 items-center border border-transparent rounded-md font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'

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
  variant: 'default',
  fullWidth: false,
  iconPosition: 'left',
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
}

export default VBSButton
