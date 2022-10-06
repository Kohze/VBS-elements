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

const VBSAvatar = ({
  size,
  src,
  variant,
  className,
  backgroundColor,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        'relative overflow-hidden',
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
  )
}

VBSAvatar.propTypes = {
  /**
   if those not enough, you can change avatar size by using
   tailwind classes like 'h-20 w-20'
  */
  size: PropTypes.oneOf(Object.keys(sizes)),
  variant: PropTypes.oneOf(Object.keys(variants)),
  src: PropTypes.string,
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
}

export default VBSAvatar
