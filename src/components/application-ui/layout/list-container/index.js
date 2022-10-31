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
    li: 'py-4',
  },
  'card-with-divider': {
    ul: 'divide-y divide-gray-200',
    li: 'px-6 py-4',
    wrapper: 'overflow-hidden rounded-md bg-white shadow',
  },
  'card-with-divider-full': {
    ul: 'divide-y divide-gray-200',
    li: 'px-4 py-4 sm:px-6',
    wrapper: 'overflow-hidden rounded-md bg-white shadow',
  },
  'separated-cards': {
    ul: 'space-y-3',
    li: 'overflow-hidden rounded-md bg-white px-6 py-4 shadow',
  },
  'separated-cards-full': {
    ul: 'space-y-3',
    li: 'overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6',
  },
  'flat-with-divider': {
    ul: 'divide-y divide-gray-200',
    li: 'px-6 py-4',
    wrapper: 'overflow-hidden bg-white',
  },
  'simple-with-divider-full': {
    ul: 'divide-y divide-gray-200',
    li: 'px-4 py-4 sm:px-0',
  },
}

const VariantContext = React.createContext()

const useVariant = () => {
  const variant = React.useContext(VariantContext)
  if (variant === undefined) {
    throw new Error('useVariant must be used within a VariantProvider')
  }
  return variant
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
          {/* items */}
          <VariantContext.Provider value={variant}>
            {children}
          </VariantContext.Provider>
        </ul>
      </div>
    )
  }

  return (
    <ul role="list" className={twMerge(variants[variant].ul, listClassName)}>
      {/* items */}
      <VariantContext.Provider value={variant}>
        {children}
      </VariantContext.Provider>
    </ul>
  )
}

const ListContainerItem = ({ children, className }) => {
  const variant = useVariant()
  return (
    <>
      <li className={twMerge(variants[variant].li, className)}>
        {/* content */}
        {children}
      </li>
    </>
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

ListContainerItem.propTypes = {
  variant: PropTypes.oneOf(Object.keys(variants)),
  item: PropTypes.object,
  children: PropTypes.node,
  itemClassName: PropTypes.string,
}

export default ListContainer
export { ListContainerItem }
