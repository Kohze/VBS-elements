import PropTypes from 'prop-types'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { getFirstCharsOfName } from '@/utils/index'

const sizes = {
  xs: 'h-6 w-6',
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
  xl: 'h-16 w-16',
}

const variants = {
  square: 'rounded-none',
  rounded: 'rounded-md',
  circular: 'rounded-full',
}

const kinds = ['default', 'placeholderAvatar', 'nameAvatar']

const notificationPositions = {
  topRight: 'top-0 right-0',
  topLeft: 'top-0 left-0',
  bottomRight: 'bottom-0 right-0',
  bottomLeft: 'bottom-0 left-0',
}

const VBSAvatar = ({
  size,
  src,
  variant,
  kind,
  personName,
  className,
  backgroundColor,
  withNotification,
  notificationColor,
  notificationPosition,
  notificationClassName,
  ...props
}) => {
  const notificationSizes = `${size === 'xs' && 'h-1.5 w-1.5'} ${
    size === 'sm' && 'h-2 w-2'
  } ${size === 'md' && 'h-2.5 w-2.5'} ${size === 'lg' && 'h-3 w-3'} ${
    size === 'xl' && 'h-3.5 w-3.5'
  }`

  if (src) {
    return (
      <div className="relative inline-flex">
        <div
          className={twMerge(
            'relative overflow-hidden inline-block',
            sizes[size],
            variants[variant],
            className,
          )}
        >
          <Image
            src={src}
            className="inline-block"
            layout="fill"
            objectFit="cover"
            alt={props.alt}
            style={{ backgroundColor }}
            {...props}
          />
        </div>
        {withNotification && (
          <span
            className={twMerge(
              'absolute ring-2 ring-white rounded-full',
              notificationSizes,
              notificationPositions[notificationPosition],
              notificationClassName,
              (variant === 'rounded' || variant === 'square') &&
                notificationPosition === 'topLeft' &&
                '-translate-y-1/2 -translate-x-1/2 transform',
              (variant === 'rounded' || variant === 'square') &&
                notificationPosition === 'topRight' &&
                '-translate-y-1/2 translate-x-1/2 transform',
              (variant === 'rounded' || variant === 'square') &&
                notificationPosition === 'bottomLeft' &&
                'translate-y-1/2 -translate-x-1/2 transform',
              (variant === 'rounded' || variant === 'square') &&
                notificationPosition === 'bottomRight' &&
                'translate-y-1/2 translate-x-1/2 transform',
            )}
            style={{ backgroundColor: notificationColor }}
          />
        )}
      </div>
    )
  }

  if (kind === 'placeholderAvatar') {
    return (
      <span className="inline-block w-8 h-8 overflow-hidden bg-gray-100 rounded-full">
        <svg
          className="w-full h-full text-gray-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </span>
    )
  }

  if (kind === 'nameAvatar' && personName) {
    return (
      <span className="inline-flex items-center justify-center w-10 h-10 bg-gray-500 rounded-full">
        <span className="font-medium leading-none text-white">
          {getFirstCharsOfName(personName)}
        </span>
      </span>
    )
  }

  return null
}

VBSAvatar.defaultProps = {
  size: 'md',
  variant: 'rounded',
  kind: 'default',
  backgroundColor: 'transparent',
  withNotification: false,
  notificationPosition: 'topRight',
  notificationColor: 'lightgreen',
}

VBSAvatar.propTypes = {
  /**
   if those not enough, you can change avatar size by using
   tailwind classes like 'h-20 w-20'
  */
  size: PropTypes.oneOf(Object.keys(sizes)),
  variant: PropTypes.oneOf(Object.keys(variants)),
  /**
   * if you want to use an image as avatar, you can use src prop
   * if you want to use a placeholder avatar, you can use kind prop without src
   * if you want to use a name avatar, you can use kind prop and personName prop
   */
  kind: PropTypes.oneOf(kinds),
  /**
   * if you want to use an image as avatar, you can use src prop
   * if you want to use a placeholder avatar or name avatar, you can use kind prop without src
   */
  src: PropTypes.string,
  /**
   tailwind classes might not work here but you can use
    in real component
  */
  className: PropTypes.string,
  /**
   you can use backgroundColor to set background color
   or you can use className with tailwind colors like 'bg-red-500'
  */
  backgroundColor: PropTypes.string,
  withNotification: PropTypes.bool,
  notificationColor: PropTypes.string,
  notificationPosition: PropTypes.oneOf(Object.keys(notificationPositions)),
  notificationClassName: PropTypes.string,
  personName: PropTypes.string,
}

export default VBSAvatar
