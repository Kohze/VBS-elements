import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'
import VBSAvatar from '../avatar'

const sizes = ['xs', 'sm', 'md', 'lg', 'xl']
const kinds = ['square', 'rounded', 'circular']

const VBSAvatarStack = ({ items, size, kind, className, ...props }) => {
  return (
    <div
      className={twMerge('flex -space-x-1 overflow-hidden isolate', className)}
    >
      {items.map((item, index) => {
        return (
          <div key={index} style={{ zIndex: index }}>
            <VBSAvatar
              size={size}
              kind={kind}
              className="ring-2 ring-white"
              imageSrc={item.imageSrc}
              personName={item.name}
              style={{ ...props.style }}
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
  kind: PropTypes.oneOf(kinds),
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
