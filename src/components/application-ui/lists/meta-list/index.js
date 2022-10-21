import PropTypes from 'prop-types'
import VBSIcon from '../../elements/icon'
import { v4 as uuidv4 } from 'uuid'
import { twMerge } from 'tailwind-merge'

const VBSMetaList = ({ items, iconColor, iconPosition, className }) => {
  return (
    <div
      className={twMerge(
        'flex flex-col mt-1 sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6',
        className,
      )}
    >
      {items.map((item) => (
        <div
          key={uuidv4()}
          className={twMerge(
            'flex items-center mt-2 text-sm text-gray-400',
            iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse',
          )}
        >
          <VBSIcon
            iconName={item.iconName}
            className={twMerge(
              'flex-shrink-0',
              iconPosition === 'left' ? 'mr-1.5' : 'ml-1.5',
            )}
            color={iconColor}
          />
          {item.name}
        </div>
      ))}
    </div>
  )
}

VBSMetaList.defaultProps = {
  items: [],
  iconPosition: 'left',
}

VBSMetaList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.elementType,
      name: PropTypes.string,
    }),
  ).isRequired,
  iconColor: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
}

export default VBSMetaList
