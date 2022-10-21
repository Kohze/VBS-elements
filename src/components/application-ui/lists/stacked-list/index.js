import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import VBSIcon from '../../elements/icon'
import VBSInfoItem from '../../list-items/info-item'

const VBSStackedList = ({ items, iconName }) => {
  console.log(items)
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {items.map((item) => {
        return item.href ? (
          <a
            href={item.href}
            className="flex items-center justify-between px-4 hover:bg-gray-50"
            key={uuidv4()}
          >
            <div className="flex-1 min-w-0 md:grid md:grid-cols-2 md:gap-4">
              <VBSInfoItem {...item} />
              <span className="hidden md:block">
                {item.additionalInfo && (
                  <VBSInfoItem {...item.additionalInfo} />
                )}
              </span>
            </div>
            <VBSIcon iconName={iconName} />
          </a>
        ) : (
          <VBSInfoItem {...item} />
        )
      })}
    </ul>
  )
}

VBSStackedList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string,
      withAvatar: PropTypes.bool,
      avatarPosition: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
      avatarSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
      title: PropTypes.string.isRequired,
      metaList: PropTypes.arrayOf(
        PropTypes.shape({
          iconName: PropTypes.string,
          name: PropTypes.string,
        }),
      ),
      iconColor: PropTypes.string,
      iconPosition: PropTypes.oneOf(['left', 'right']),
      actions: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          iconName: PropTypes.string,
          onClick: PropTypes.func,
        }),
      ),
    }),
  ).isRequired,
}

export default VBSStackedList
