import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import VBSMetaList from '../../lists/meta-list'
import VBSAvatar from '../../elements/avatar'

const VBSInfoItem = ({
  imageSrc,
  withAvatar,
  title,
  metaList,
  actions,
  iconColor,
  iconPosition,
}) => {
  return (
    <li className="flex py-4" key={uuidv4()}>
      {withAvatar && <VBSAvatar imageSrc={imageSrc} size="lg" />}
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <VBSMetaList
          items={metaList}
          iconColor={iconColor}
          iconPosition={iconPosition}
        />
      </div>
    </li>
  )
}

VBSInfoItem.defaultProps = {
  withAvatar: false,
  metaList: [],
  iconPosition: 'left',
}

VBSInfoItem.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  metaList: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.elementType,
      name: PropTypes.string,
    }),
  ).isRequired,
  withAvatar: PropTypes.bool,
  iconColor: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
}

export default VBSInfoItem
