import PropTypes from 'prop-types'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import NextLink from 'next/link'
import { twMerge } from 'tailwind-merge'
import VBSIcon from '../icon'
import VBSButton from '../button'

const VBSDropdown = ({
  elements,
  groupElements,
  minimal,
  listIconPosition,
  listIconType,
  buttonText,
  buttonSize,
  buttonIconName,
  buttonIconPosition,
  buttonIconType,
  buttonVariant,
  buttonKind,
  buttonClassName,
}) => {
  const renderElements = (els) => {
    return els.map((el, index) => {
      return (
        <Menu.Item key={index}>
          {({ active }) => (
            <NextLink href={el.href || '#'}>
              <a
                className={twMerge(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'group flex items-center px-4 py-2 text-sm',
                )}
              >
                {listIconPosition === 'left' && (
                  <>
                    <VBSIcon
                      iconName={el.iconName}
                      iconType={listIconType}
                      className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    {el.text}
                  </>
                )}

                {listIconPosition === 'right' && (
                  <>
                    <span className="w-full">{el.text}</span>
                    <VBSIcon
                      iconName={el.iconName}
                      iconType={listIconType}
                      className="w-5 h-5 ml-3 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </>
                )}
              </a>
            </NextLink>
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
        {minimal ? (
          <Menu.Button
            as={VBSButton}
            variant={buttonVariant}
            kind="circular"
            iconName={'ellipsis-vertical' || buttonIconName}
            iconPosition="only"
            iconType={buttonIconType}
            size={buttonSize}
            className={buttonClassName}
            fullWidth
          />
        ) : (
          <Menu.Button
            as={VBSButton}
            className="ml-2"
            variant={buttonVariant}
            text={buttonText}
            iconName={buttonIconName || 'chevron-down'}
            iconPosition={buttonIconPosition}
            iconType={buttonIconType}
            kind={buttonKind}
            size={buttonSize}
            fullWidth
          />
        )}
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
  listIconPosition: 'left',
  listIconType: 'solid',
  kind: 'normal',
  buttonIconPosition: 'right',
  buttonIconType: 'solid',
  buttonVariant: 'outline',
  buttonKind: 'rounded',
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
  listIconPosition: PropTypes.oneOf(['left', 'right']),
  listIconType: PropTypes.oneOf(['solid', 'outline']),
  minimal: PropTypes.bool,
  buttonText: PropTypes.string,
  buttonSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  buttonIconName: PropTypes.string,
  buttonIconPosition: PropTypes.oneOf(['left', 'right', 'only']),
  buttonIconType: PropTypes.oneOf(['solid', 'outline']),
  buttonVariant: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'outline',
    'dark',
  ]),
  buttonKind: PropTypes.oneOf(['circular', 'normal', 'rounded']),
  buttonClassName: PropTypes.string,
}

export default VBSDropdown
