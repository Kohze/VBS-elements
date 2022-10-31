import PropTypes from 'prop-types'
import Icon from '../../elements/icon'
import { v4 as uuidv4 } from 'uuid'
import { twMerge } from 'tailwind-merge'

const MetaList = ({ items, className }) => {
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
            item.iconPosition === 'right' ? 'flex-row-reverse' : 'flex-row',
          )}
        >
          <Icon
            iconName={item.iconName}
            className={twMerge(
              'flex-shrink-0',
              item.iconPosition === 'right' ? 'ml-2' : 'mr-2',
            )}
            color={item.iconColor}
          />
          {item.name}
        </div>
      ))}
    </div>
  )
}

MetaList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.elementType,
      name: PropTypes.string,
      iconColor: PropTypes.string,
      iconPosition: PropTypes.oneOf(['left', 'right']),
    }),
  ).isRequired,
}

export default MetaList
