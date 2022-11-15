import React from 'react'
import { css } from '@emotion/css'
import { twMerge } from 'tailwind-merge'
import { Icon } from '@/components/application-ui/elements'
import PropTypes from 'prop-types'

const CardFooterList = ({ list, classNames }) => {
  const listStyles = css`
    @media (min-width: 768px) {
      grid-template-columns: repeat(${list.length}, minmax(0, 1fr));
    }
  `

  return list.length > 0 ? (
    <div
      className={twMerge(
        'grid grid-cols-1 divide-y divide-gray-200 bg-gray-50 sm:divide-y-0 sm:divide-x',
        listStyles,
        classNames?.main,
      )}
    >
      {list?.map((item) => (
        <div
          key={item.label}
          className={twMerge(
            'flex items-center justify-center px-6 py-5 text-sm font-medium',
            classNames?.item,
          )}
        >
          {item.iconName && (
            <Icon
              className={twMerge('mr-2', classNames?.icon)}
              iconName={item.iconName}
            />
          )}
          {item.value && (
            <span className={twMerge('mr-1 text-gray-900', classNames?.value)}>
              {item.value}
            </span>
          )}
          {item.label && (
            <span className={twMerge('text-gray-600', classNames?.label)}>
              {item.label}
            </span>
          )}
        </div>
      ))}
    </div>
  ) : null
}

CardFooterList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      iconName: PropTypes.string,
    }),
  ),
  classNames: PropTypes.shape({
    main: PropTypes.string,
    item: PropTypes.string,
    icon: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
  }),
}

export default CardFooterList
