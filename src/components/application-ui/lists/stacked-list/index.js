import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import VBSInfoItem from '../../list-items/info-item'

const VBSStackedList = ({ items }) => {
  return (
    <ul role="list" className="divide-y divide-gray-200">
      {items.map((item) => {
        return item.href ? (
          <a href={item.href} className="block hover:bg-gray-50" key={uuidv4()}>
            <VBSInfoItem {...item} />
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
