import PropTypes from 'prop-types'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

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

VBSAvatar.defaultProps = {
  size: 'md',
  variant: 'rounded',
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
}

export default VBSAvatar
