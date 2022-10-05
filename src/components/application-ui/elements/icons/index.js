import { lookupHeroIcon } from '@/assets/icons/hero-icons/lookup'
import PropTypes from 'prop-types'

const VBSIcon = ({ iconName, iconType }) => {
  const Icon = lookupHeroIcon(iconName, iconType)
  return (
    <div>
      <Icon className="flex h-5 w-5" iconType={iconType} />
    </div>
  )
}

VBSIcon.defaultProps = {
  iconName: '',
  iconType: 'solid',
}

VBSIcon.propTypes = {
  iconName: PropTypes.string,
  iconType: PropTypes.string,
}

export default VBSIcon
