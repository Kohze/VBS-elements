import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { MetaList } from '@/components/application-ui/lists'
import { Avatar, Button } from '@/components/application-ui/elements'
import { twMerge } from 'tailwind-merge'

const InfoItem = ({
  imageSrc,
  withAvatar,
  avatarPosition,
  avatarSize,
  title,
  label,
  description,
  metaList,
  stamp,
  actions,
  iconColor,
  iconPosition,
  classNames,
}) => {
  return (
    <li className={twMerge('flex py-4', classNames?.item)}>
      <div className="flex-1">
        <div
          className={twMerge(
            'inline-flex items-center',
            avatarPosition === 'left' && 'flex-row',
            avatarPosition === 'right' && 'flex-row-reverse',
            avatarPosition === 'top' && 'flex-col items-center',
            avatarPosition === 'bottom' && 'flex-col-reverse items-center',
            classNames?.info,
          )}
        >
          <span
            className={twMerge(
              'flex-shrink-0 inline-flex',
              avatarPosition === 'left' && 'mr-3',
              avatarPosition === 'right' && 'ml-3',
              avatarPosition === 'top' && 'mb-3',
              avatarPosition === 'bottom' && 'mt-3',
              classNames?.avatar,
            )}
          >
            {withAvatar && <Avatar imageSrc={imageSrc} size={avatarSize} />}
          </span>
          <div className="flex flex-col justify-center flex-1">
            <p
              className={twMerge(
                'flex justify-between space-x-3 text-sm font-medium text-gray-900',
                classNames?.title,
              )}
            >
              <span>
                {title}
                <span className="ml-2 text-xs font-light text-gray-500">
                  {label}
                </span>
              </span>
              {!!stamp && (
                <time
                  className={twMerge(
                    'flex-shrink-0 text-sm text-gray-400 whitespace-nowrap',
                    classNames?.stamp,
                  )}
                >
                  {stamp}
                </time>
              )}
            </p>
            {description && (
              <p
                className={twMerge(
                  'text-sm text-gray-500',
                  classNames?.description,
                )}
              >
                {description}
              </p>
            )}
            <MetaList
              items={metaList}
              iconColor={iconColor}
              iconPosition={iconPosition}
              className={classNames?.metaList}
            />
          </div>
        </div>
      </div>

      {!!actions && (
        <div
          className={twMerge('flex items-center gap-2', classNames?.actions)}
        >
          {actions.map((action) => (
            <div key={uuidv4()}>
              <Button {...action} />
            </div>
          ))}
        </div>
      )}
    </li>
  )
}

InfoItem.defaultProps = {
  withAvatar: false,
  metaList: [],
  iconPosition: 'left',
  avatarPosition: 'left',
  avatarSize: 'lg',
}

InfoItem.propTypes = {
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
  stamp: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      iconName: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ),
  /**
   * The `classNames` prop is an object that contains the classNames for the different elements.
   */
  classNames: PropTypes.shape({
    item: PropTypes.string,
    info: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    stamp: PropTypes.string,
    metaList: PropTypes.string,
    actions: PropTypes.string,
    avatar: PropTypes.string,
  }),
}

export default InfoItem
