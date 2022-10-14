import PropTypes from 'prop-types'
import VBSButton from '../../elements/button'
import VBSIcon from '../../elements/icon'

const variants = [
  'simple',
  'with-label',
  'with-icon',
  'with-button',
  'with-title',
]
const positions = ['left', 'right', 'center']

const VBSDivider = ({
  variant,
  position,
  label,
  labelClassName,
  iconName,
  iconSize,
  iconColor,
  buttonText,
  buttonSize,
  buttonIconName,
  buttonIconPosition,
  buttonClassName,
  buttonKind,
  title,
  className,
  color,
  ...props
}) => {
  const getVariant = () => {
    switch (variant) {
      case 'simple':
        return null
      case 'with-label':
        return (
          <span className="px-2 text-sm text-gray-500 bg-white">{label}</span>
        )
      case 'with-icon':
        return (
          <span className="px-2 text-gray-500 bg-white">
            <VBSIcon
              aria-hidden="true"
              iconName={iconName}
              width={iconSize?.width}
              height={iconSize?.height}
              color={iconColor}
            />
          </span>
        )
      case 'with-button':
        return (
          <VBSButton
            size={buttonSize}
            variant="outline"
            kind={buttonKind}
            text={buttonText}
            iconName={buttonIconName}
            iconPosition={buttonIconPosition}
            className={buttonClassName}
          />
        )
    }
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">{getVariant()}</div>
    </div>
  )
}

VBSDivider.defaultProps = {
  variant: 'simple',
  position: 'center',
  label: 'or',
  iconName: 'plus',
  iconSize: {
    width: 16,
    height: 16,
  },
  iconColor: 'gray-500',
  buttonText: 'Button text',
  buttonSize: 'sm',
  buttonIconName: 'hashtag',
  buttonIconPosition: 'left',
  buttonKind: 'primary',
  title: 'Title',
  color: 'gray-300',
}

VBSDivider.propTypes = {
  variant: PropTypes.oneOf(variants),
  position: PropTypes.oneOf(positions),
  label: PropTypes.string,
  iconName: PropTypes.string,
  iconSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  iconColor: PropTypes.string,
  buttonText: PropTypes.string,
  buttonSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  buttonKind: PropTypes.oneOf(['square', 'rounded', 'circular']),
  buttonIconName: PropTypes.string,
  buttonIconPosition: PropTypes.oneOf(['left', 'right']),
  buttonClassName: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
}

export default VBSDivider
