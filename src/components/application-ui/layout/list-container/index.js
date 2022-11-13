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

const ListContainer = ({ children, variant, classNames }) => {
  if (withWrapper.includes(variant)) {
    return (
      <div className={twMerge(variants[variant].wrapper, classNames?.wrapper)}>
        <ul
          role="list"
          className={twMerge(variants[variant].ul, classNames?.list)}
        >
          {children}
        </ul>
      </div>
    )
  }

  return (
    <ul role="list" className={twMerge(variants[variant].ul, classNames?.list)}>
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
  /**
   * The `classNames` prop is an object that contains the classNames for the different elements.
   */
  classNames: PropTypes.shape({
    wrapper: PropTypes.string,
    list: PropTypes.string,
  }),
}

export default ListContainer
