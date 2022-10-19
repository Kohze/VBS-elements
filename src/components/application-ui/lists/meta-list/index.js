import PropTypes from 'prop-types'
import VBSIcon from '../../elements/icon'
import { v4 as uuidv4 } from 'uuid'

const VBSMetaList = ({ items }) => {
  console.log(items)
  return (
    <div className="flex flex-col mt-1 sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
      {items.map(
        (item) =>
          console.log(item) || (
            <div
              key={uuidv4()}
              className="flex items-center mt-2 text-sm text-gray-400"
            >
              <VBSIcon
                iconName={item.iconName}
                className="flex-shrink-0 mr-1.5"
              />
              {item.name}
            </div>
          ),
      )}
    </div>
  )
}

VBSMetaList.defaultProps = {
  items: [],
}

VBSMetaList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      name: PropTypes.string,
    }),
  ).isRequired,
}

export default VBSMetaList
