import PropTypes from 'prop-types'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import NextLink from 'next/link'
import { twMerge } from 'tailwind-merge'
import { Button, Icon } from '@/components/application-ui/elements'

export const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700',
  success: 'bg-green-700 text-white hover:bg-green-800',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  warning: 'text-black bg-yellow-300 hover:bg-yellow-400',
  info: 'bg-blue-800 text-white hover:bg-blue-900',
  light: 'text-gray-900 bg-gray-100 hover:bg-gray-200',
  outline: 'text-gray-600 bg-white hover:bg-gray-50',
  dark: 'bg-gray-800 text-white hover:bg-gray-900',
}

export const menuKinds = {
  square: 'rounded-none',
  rounded: 'rounded-md overflow-hidden',
}

const Dropdown = ({
  elements,
  groupElements,
  minimal,
  variant,
  menuItemIconPosition,
  menuItemIconType,
  menuItemClassName,
  menuKind,
  menuClassName,
  iconClassName,
  buttonText,
  buttonSize,
  buttonIconName,
  buttonIconPosition,
  buttonIconType,
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
                  'group flex items-center px-4 py-2 text-sm',
                  variants[variant],
                  active ? 'bg-gray-100 text-gray-900' : '',
                  variant === 'light' && 'bg-white',
                  menuItemClassName,
                )}
              >
                {menuItemIconPosition === 'left' && (
                  <>
                    <Icon
                      iconName={el.iconName}
                      iconType={menuItemIconType}
                      className={twMerge(
                        'w-5 h-5 mr-3',
                        variants[variant],
                        variant === 'light' && 'bg-white',
                        iconClassName,
                      )}
                      aria-hidden="true"
                    />
                    {el.text}
                  </>
                )}

                {menuItemIconPosition === 'right' && (
                  <>
                    <span className="w-full">{el.text}</span>
                    <Icon
                      iconName={el.iconName}
                      iconType={menuItemIconType}
                      className={twMerge(
                        'w-5 h-5 ml-3',
                        variants[variant],
                        iconClassName,
                      )}
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
            as={Button}
            variant={variant}
            kind="circular"
            iconName={buttonIconName || 'ellipsis-vertical'}
            iconPosition="only"
            iconType={buttonIconType}
            size={buttonSize}
            className={twMerge(
              buttonClassName,
              variant === 'outline' ? 'text-gray-600 border-gray-400' : '',
            )}
            fullWidth
          />
        ) : (
          <Menu.Button
            as={Button}
            variant={variant}
            text={buttonText}
            iconName={buttonIconName || 'chevron-down'}
            iconPosition={buttonIconPosition}
            iconType={buttonIconType}
            kind={buttonKind}
            size={buttonSize}
            fullWidth
            className={twMerge(
              variant === 'outline' ? 'text-gray-600 border-gray-400' : '',
              buttonClassName,
            )}
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
            menuKinds[menuKind],
            menuClassName,
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

Dropdown.defaultProps = {
  menuItemIconPosition: 'left',
  menuItemIconType: 'solid',
  kind: 'normal',
  buttonIconPosition: 'right',
  buttonIconType: 'solid',
  buttonKind: 'rounded',
  variant: 'outline',
  menuKind: 'square',
}

Dropdown.propTypes = {
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
  menuItemIconPosition: PropTypes.oneOf(['left', 'right']),
  menuItemIconType: PropTypes.oneOf(['solid', 'outline']),
  minimal: PropTypes.bool,
  variant: PropTypes.oneOf([
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
  buttonText: PropTypes.string,
  buttonSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  buttonIconName: PropTypes.string,
  buttonIconPosition: PropTypes.oneOf(['left', 'right', 'only']),
  buttonIconType: PropTypes.oneOf(['solid', 'outline']),
  buttonKind: PropTypes.oneOf(['circular', 'normal', 'rounded']),
  buttonClassName: PropTypes.string,
  menuItemClassName: PropTypes.string,
  menuKind: PropTypes.oneOf(['square', 'rounded']),
  iconClassName: PropTypes.string,
  menuClassName: PropTypes.string,
}

export default Dropdown
