import { twMerge } from 'tailwind-merge'
import VBSButton from '../button'
import PropTypes from 'prop-types'

export const sizes = ['xs', 'sm', 'md', 'lg', 'xl']
export const variants = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'outline',
  'dark',
]

export const kinds = ['square', 'rounded', 'circular']

const VBSButtonGroup = ({
  groupElements,
  iconPosition,
  iconType,
  size,
  variant,
  kind,
}) => {
  return (
    <span className="inline-flex rounded-md shadow-sm isolate">
      {groupElements
        ? groupElements?.map((element, index) => (
            <VBSButton
              key={index}
              text={element.text}
              iconName={element.iconName}
              iconPosition={iconPosition}
              iconType={iconType}
              size={size}
              variant={variant}
              className={twMerge(
                index === 0 &&
                  kind === 'rounded' &&
                  'rounded-l-md rounded-r-none',
                index === 0 &&
                  kind === 'circular' &&
                  'rounded-l-full rounded-r-none',
                index === 0 &&
                  kind === 'square' &&
                  'rounded-l-none rounded-r-none',
                index === groupElements.length - 1 &&
                  kind === 'rounded' &&
                  'rounded-l-none rounded-r-md',
                index === groupElements.length - 1 &&
                  kind === 'circular' &&
                  'rounded-l-none rounded-r-full',
                index === groupElements.length - 1 &&
                  kind === 'square' &&
                  'rounded-l-none rounded-r-none',
                index > 0 && index < groupElements.length - 1 && 'rounded-none',
              )}
            />
          ))
        : null}
    </span>
  )
}

VBSButtonGroup.defaultProps = {
  groupElements: [],
  iconPosition: 'left',
  iconType: 'solid',
  size: 'md',
  variant: 'primary',
  kind: 'rounded',
}

VBSButtonGroup.propTypes = {
  groupElements: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      iconName: PropTypes.string,
    }),
  ),
  iconPosition: PropTypes.oneOf(['left', 'right']),
  size: PropTypes.oneOf(sizes),
  variant: PropTypes.oneOf(variants),
  kind: PropTypes.oneOf(kinds),
}

export default VBSButtonGroup
