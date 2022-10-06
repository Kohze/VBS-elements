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
  const Icon = lookupHeroIcon(iconName, iconType)
  return (
    <div>
      <Icon
        iconType={iconType}
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
  iconType: PropTypes.string,
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default VBSIcon
