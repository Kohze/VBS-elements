import { lookupHeroIcon } from '@/assets/icons/hero-icons/lookup'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

const sizes = {
  xs: 'w-3 h-3',
  sm: 'w-3.5 h-3.5',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
  xl: 'w-6 h-6',
}

const Icon = ({
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

Icon.defaultProps = {
  iconType: 'solid',
  className: 'flex',
  size: 'md',
}

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconType: PropTypes.oneOf(['solid', 'outline']),
  size: PropTypes.oneOf(Object.keys(sizes)),
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

export default Icon
