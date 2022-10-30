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
  avatarSize,
  title,
  label,
  description,
  metaList,
  actions,
  iconColor,
  iconPosition,
  className,
  infoClassName,
  titleClassName,
  metaListClassName,
  actionsClassName,
  avatarClassName,
}) => {
  return (
    <li className={twMerge('flex py-4', className)}>
      <div className="flex-1">
        <div
          className={twMerge(
            'inline-flex items-center',
            avatarPosition === 'left' && 'flex-row',
            avatarPosition === 'right' && 'flex-row-reverse',
            avatarPosition === 'top' && 'flex-col items-center',
            avatarPosition === 'bottom' && 'flex-col-reverse items-center',
            infoClassName,
          )}
        >
          <span
            className={twMerge(
              'flex-shrink-0 inline-flex',
              avatarPosition === 'left' && 'mr-3',
              avatarPosition === 'right' && 'ml-3',
              avatarPosition === 'top' && 'mb-3',
              avatarPosition === 'bottom' && 'mt-3',
              avatarClassName,
            )}
          >
            {withAvatar && <VBSAvatar imageSrc={imageSrc} size={avatarSize} />}
          </span>
          <div className="flex flex-col justify-center flex-1">
            <p
              className={twMerge(
                'text-sm font-medium text-gray-900',
                titleClassName,
              )}
            >
              {title}{' '}
              <span className="ml-1 text-xs font-light text-gray-500">
                {label}
              </span>
            </p>
            {description && (
              <p className="text-sm text-gray-500">{description}</p>
            )}
            <VBSMetaList
              items={metaList}
              iconColor={iconColor}
              iconPosition={iconPosition}
              className={metaListClassName}
            />
          </div>
        </div>
      </div>
      {!!actions && (
        <div className={twMerge('flex items-center gap-2', actionsClassName)}>
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
  avatarSize: 'lg',
}

VBSInfoItem.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string || PropTypes.node,
  metaList: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.elementType,
      name: PropTypes.string,
    }),
  ).isRequired,
  withAvatar: PropTypes.bool,
  avatarPosition: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  avatarSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
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
