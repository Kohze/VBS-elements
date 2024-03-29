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
  '2xl': 'h-20 w-20',
  '3xl': 'h-24 w-24',
  '4xl': 'h-32 w-32',
}

const kinds = {
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

const Avatar = ({
  size,
  imageSrc,
  kind,
  personName,
  classNames,
  backgroundColor,
  color,
  withNotification,
  withInfo,
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

  if (imageSrc) {
    return (
      <div className="relative inline-flex">
        <div
          className={twMerge(
            'relative overflow-hidden inline-block',
            sizes[size],
            kinds[kind],
            classNames?.main,
          )}
        >
          <Image
            src={imageSrc}
            className={twMerge('inline-block', classNames?.image)}
            layout="fill"
            objectFit="cover"
            alt={props.alt}
            style={{ backgroundColor, ...props.style }}
            priority
            {...props}
          />
        </div>
        {withNotification && (
          <span
            className={twMerge(
              'absolute ring-2 ring-white rounded-full',
              notificationSizes,
              notificationPositions[notificationPosition],
              classNames?.notification,
              (kind === 'rounded' || kind === 'square') &&
                notificationPosition === 'topLeft' &&
                '-translate-y-1/2 -translate-x-1/2 transform',
              (kind === 'rounded' || kind === 'square') &&
                notificationPosition === 'topRight' &&
                '-translate-y-1/2 translate-x-1/2 transform',
              (kind === 'rounded' || kind === 'square') &&
                notificationPosition === 'bottomLeft' &&
                'translate-y-1/2 -translate-x-1/2 transform',
              (kind === 'rounded' || kind === 'square') &&
                notificationPosition === 'bottomRight' &&
                'translate-y-1/2 translate-x-1/2 transform',
            )}
            style={{ backgroundColor: notificationColor }}
          />
        )}
      </div>
    )
  }

  if (!imageSrc && personName) {
    return (
      <span
        className={twMerge(
          'inline-flex items-center justify-center  bg-gray-500 rounded-full',
          sizes[size],
          kinds[kind],
          classNames?.main,
        )}
        style={{ backgroundColor, ...props.style }}
      >
        <span
          className={twMerge(
            'font-medium leading-none text-white',
            size === 'xs' && 'text-xs',
            size === 'sm' && 'text-sm',
            size === 'md' && 'text-base',
            size === 'lg' && 'text-lg',
            size === 'xl' && 'text-xl',
          )}
          style={{ color }}
        >
          {getFirstCharsOfName(personName)}
        </span>
      </span>
    )
  }

  return (
    <span
      className={twMerge(
        'inline-block  overflow-hidden bg-gray-100 rounded-full',
        sizes[size],
        kinds[kind],
        classNames?.main,
      )}
      style={{ backgroundColor, color, ...props.style }}
    >
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </span>
  )
}

Avatar.defaultProps = {
  size: 'md',
  kind: 'circular',
  backgroundColor: 'transparent',
  withNotification: false,
  notificationPosition: 'topRight',
  notificationColor: 'lightgreen',
  backgroundColor: '#647598',
  color: '#eeeeee',
}

Avatar.propTypes = {
  size: PropTypes.oneOf(Object.keys(sizes)),
  kind: PropTypes.oneOf(Object.keys(kinds)),
  imageSrc: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  withNotification: PropTypes.bool,
  withInfo: PropTypes.bool,
  notificationPosition: PropTypes.oneOf(Object.keys(notificationPositions)),
  notificationColor: PropTypes.string,
  personName: PropTypes.string,
  /**
   * The `classNames` prop is an object that contains the classNames for the different elements.
   */
  classNames: PropTypes.shape({
    main: PropTypes.string,
    notification: PropTypes.string,
    image: PropTypes.string,
  }),
}

export default Avatar
