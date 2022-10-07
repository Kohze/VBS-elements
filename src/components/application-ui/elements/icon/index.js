import { lookupHeroIcon } from '@/assets/icons/hero-icons/lookup'
import PropTypes from 'prop-types'

const VBSIcon = ({
  iconName,
  iconType,
  backgroundColor,
  color,
  width,
  height,
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
        className={className}
        {...props}
      />
    </div>
  )
}

VBSIcon.defaultProps = {
  iconName: '',
  iconType: 'solid',
  className: 'flex h-5 w-5',
}

VBSIcon.propTypes = {
  iconName: PropTypes.string,
  iconType: PropTypes.oneOf(['solid', 'outline']),
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

export default VBSIcon
