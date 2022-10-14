import { lookupHeroIcon } from '@/assets/icons/hero-icons/lookup'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

const sizes = {
  xs: 'w-4 h-4',
  sm: 'w-5 h-5',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-10 h-10',
}

const VBSIcon = ({
  iconName,
  iconType,
  backgroundColor,
  color,
  width,
  height,
  size,
  className,
  ...props
}) => {
  if (!iconName) {
    return null
  }

  const Icon = lookupHeroIcon(iconName, iconType)
  return (
    <div>
      <Icon
        style={{ backgroundColor, color, width, height }}
        className={twMerge(sizes[size], className)}
        {...props}
      />
    </div>
  )
}

VBSIcon.defaultProps = {
  iconType: 'solid',
  className: 'flex',
  size: 'md',
}

VBSIcon.propTypes = {
  iconName: PropTypes.string,
  iconType: PropTypes.oneOf(['solid', 'outline']),
  size: PropTypes.oneOf(Object.keys(sizes)),
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

export default VBSIcon
