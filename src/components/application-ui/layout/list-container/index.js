import PropTypes from 'prop-types'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const withWrapper = [
  'card-with-divider',
  'card-with-divider-full',
  'flat-with-divider',
]

const variants = {
  simple: {
    ul: 'divide-y divide-gray-200',
  },
  'card-with-divider': {
    ul: 'divide-y divide-gray-200',
    wrapper: 'overflow-hidden rounded-md bg-white shadow',
  },
  'card-with-divider-full': {
    ul: 'divide-y divide-gray-200',
    wrapper: 'overflow-hidden rounded-md bg-white shadow',
  },
  'separated-cards': {
    ul: 'space-y-3',
  },
  'separated-cards-full': {
    ul: 'space-y-3',
  },
  'flat-with-divider': {
    ul: 'divide-y divide-gray-200',
    wrapper: 'overflow-hidden bg-white border border-gray-300 rounded-md',
  },
  'simple-with-divider-full': {
    ul: 'divide-y divide-gray-200',
  },
}

const ListContainer = ({
  children,
  variant,
  listClassName,
  wrapperClassName,
}) => {
  if (withWrapper.includes(variant)) {
    return (
      <div className={twMerge(variants[variant].wrapper, wrapperClassName)}>
        <ul
          role="list"
          className={twMerge(variants[variant].ul, listClassName)}
        >
          {children}
        </ul>
      </div>
    )
  }

  return (
    <ul role="list" className={twMerge(variants[variant].ul, listClassName)}>
      {children}
    </ul>
  )
}

ListContainer.defaultProps = {
  variant: 'simple',
}

ListContainer.propTypes = {
  variant: PropTypes.oneOf(Object.keys(variants)),
  items: PropTypes.array,
  children: PropTypes.node,
  listClassName: PropTypes.string,
  itemClassName: PropTypes.string,
  wrapperClassName: PropTypes.string,
}

export default ListContainer
