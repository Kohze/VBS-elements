import PropTypes from 'prop-types'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
  ArchiveBoxIcon,
  ArrowRightCircleIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
  HeartIcon,
  PencilSquareIcon,
  TrashIcon,
  UserPlusIcon,
} from '@heroicons/react/20/solid'
import NextLink from 'next/link'
import { twMerge } from 'tailwind-merge'
import VBSIcon from '../icon'

const VBSDropdown = ({
  elements,
  groupElements,
  header,
  iconPosition,
  iconType,
}) => {
  const renderElements = (els) => {
    return els.map((el, index) => {
      return (
        <Menu.Item key={index}>
          {({ active }) => (
            <a
              href="#"
              className={twMerge(
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'group flex items-center px-4 py-2 text-sm',
              )}
            >
              {iconPosition === 'left' && (
                <>
                  <VBSIcon
                    iconName={el.iconName}
                    iconType={iconType}
                    className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  {el.text}
                </>
              )}

              {iconPosition === 'right' && (
                <>
                  <span className="w-full">{el.text}</span>
                  <VBSIcon
                    iconName={el.iconName}
                    iconType={iconType}
                    className="w-5 h-5 ml-3 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </>
              )}
            </a>
          )}
        </Menu.Item>
      )
    })
  }

  const renderGroupElements = () => {
    return groupElements.map((elements, index) => {
      return (
        <div key={index} className="px-1 py-1">
          {renderElements(elements)}
        </div>
      )
    })
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          Options
          <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={twMerge(
            'absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
            groupElements ? 'divide-y divide-gray-100' : '',
          )}
        >
          {elements
            ? renderElements(elements)
            : groupElements
            ? renderGroupElements()
            : null}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

VBSDropdown.defaultProps = {
  iconPosition: 'left',
  iconType: 'solid',
}

VBSDropdown.propTypes = {
  /**
   * Elements should be an array of objects with the following properties:
   */

  elements: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      iconName: PropTypes.string,
    }),
  ),
  /**
   * The `groupElements` prop is an array like shape that contains the elements.
   * `groupElements` creates a group of elements that are separated by a divider.
   */
  groupElements: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
  header: PropTypes.bool,
  iconPosition: PropTypes.oneOf(['left', 'right']),
}

export default VBSDropdown
