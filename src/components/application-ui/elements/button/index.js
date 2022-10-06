import { twMerge } from 'tailwind-merge'
import PropTypes from 'prop-types'
import heroIconsNames from '@/assets/icons/hero-icons/names'
import NextLink from 'next/link'
import VBSIcon from '../icon'

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
  rounded: `rounded-full`,
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
  iconType,
  text,
  href,
  children,
  ...props
}) => {
  const isChildrenOrText = text || children
  const mainStyle =
    'inline-flex text-white bg-indigo-600 items-center rounded border border-transparent font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'

  const paddingsForIconOnly = `${
    variant === 'rounded' && size === 'xs' && iconPosition === 'only' && 'p-1'
  } ${
    variant === 'rounded' && size === 'sm' && iconPosition === 'only' && 'p-1.5'
  } ${
    variant === 'rounded' && size === 'md' && iconPosition === 'only' && 'p-2'
  } ${
    variant === 'rounded' && size === 'lg' && iconPosition === 'only' && 'p-2.5'
  } ${
    variant === 'rounded' && size === 'xl' && iconPosition === 'only' && 'p-3'
  }`

  const renderChildren = () => {
    if (iconName) {
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
              paddingsForIconOnly,
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
          paddingsForIconOnly,
          className,
        )}
        style={{
          backgroundColor,
          color,
        }}
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
  iconType: 'solid',
  iconPosition: 'left',
}

VBSButton.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes)),
  variant: PropTypes.oneOf(Object.keys(variants)),
  className: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  iconName: PropTypes.oneOf(heroIconsNames),
  iconPosition: PropTypes.oneOf(['left', 'right', 'only']),
  iconType: PropTypes.oneOf(['solid', 'outline']),
  href: PropTypes.string,
}

export default VBSButton
