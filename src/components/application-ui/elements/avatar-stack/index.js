import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'
import VBSAvatar from '../avatar'

const sizes = ['xs', 'sm', 'md', 'lg', 'xl']
const variants = ['square', 'rounded', 'circular']
const kinds = ['default', 'placeholderAvatar', 'nameAvatar']

const VBSAvatarStack = ({ items, size, variant, className, ...props }) => {
  return (
    <div
      className={twMerge('flex -space-x-1 overflow-hidden isolate', className)}
    >
      {items.map((item, index) => {
        return (
          <div key={index} style={{ zIndex: index }}>
            <VBSAvatar
              size={size}
              variant={variant}
              className="ring-2 ring-white"
              imageSrc={item.imageSrc}
              personName={item.name}
              {...props}
            />
          </div>
        )
      })}
    </div>
  )
}

VBSAvatarStack.defaultProps = {
  items: [],
}

VBSAvatarStack.propTypes = {
  size: PropTypes.oneOf(sizes),
  variant: PropTypes.oneOf(variants),
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
}

export default VBSAvatarStack
