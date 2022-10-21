import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import VBSMetaList from '../../lists/meta-list'
import VBSAvatar from '../../elements/avatar'
import VBSButton from '../../elements/button'
import { twMerge } from 'tailwind-merge'

const VBSInfoItem = ({
  imageSrc,
  withAvatar,
  avatarPosition,
  title,
  metaList,
  actions,
  iconColor,
  iconPosition,
}) => {
  return (
    <li className="flex py-4" key={uuidv4()}>
      <div className="flex-1">
        <div
          className={twMerge(
            'inline-flex',
            avatarPosition === 'left' && 'flex-row',
            avatarPosition === 'right' && 'flex-row-reverse',
            avatarPosition === 'top' && 'flex-col items-center',
            avatarPosition === 'bottom' && 'flex-col-reverse items-center',
          )}
        >
          <span
            className={twMerge(
              'flex-shrink-0',
              avatarPosition === 'left' && 'mr-3',
              avatarPosition === 'right' && 'ml-3',
              avatarPosition === 'top' && 'mb-3',
              avatarPosition === 'bottom' && 'mt-3',
            )}
          >
            {withAvatar && <VBSAvatar imageSrc={imageSrc} size="lg" />}
          </span>
          <div className="flex flex-col justify-center flex-1">
            <p className="text-sm font-medium text-gray-900">{title}</p>
            <VBSMetaList
              items={metaList}
              iconColor={iconColor}
              iconPosition={iconPosition}
            />
          </div>
        </div>
      </div>
      {!!actions && (
        <div className="flex items-center gap-2">
          {actions.map((action) => (
            <div key={uuidv4()}>
              <VBSButton {...action} />
            </div>
          ))}
        </div>
      )}
    </li>
  )
}

VBSInfoItem.defaultProps = {
  withAvatar: false,
  metaList: [],
  iconPosition: 'left',
  avatarPosition: 'left',
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
  avatarPosition: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  iconColor: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      iconName: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ),
}

export default VBSInfoItem
