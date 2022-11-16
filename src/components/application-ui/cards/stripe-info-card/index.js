import { twMerge } from 'tailwind-merge'
import PropTypes from 'prop-types'
import { Dropdown } from '@/components/application-ui/elements'
import { getFirstCharsOfName } from '@/utils/index'

const StripeInfoCard = ({
  name,
  description,
  href,
  bgColor,
  classNames,
  elements,
  dropdownVariant,
  dropdownSize,
}) => {
  return (
    <div className="flex col-span-1 rounded-md shadow-sm">
      <div
        className={twMerge(
          !bgColor && 'bg-gray-600',
          'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md border-t border-b border-l border-transparent',
        )}
        style={{ backgroundColor: bgColor }}
      >
        {name && getFirstCharsOfName(name)}
      </div>
      <div
        className={twMerge(
          'flex items-center justify-between flex-1 truncate bg-white border-t border-b border-r border-gray-200 rounded-r-md',
          elements && '!overflow-visible',
        )}
      >
        <div className="flex-1 px-4 py-2 text-sm truncate">
          <a
            href={href}
            className="font-medium text-gray-900 hover:text-gray-600"
          >
            {name}
          </a>
          <p className="text-gray-500">{description}</p>
        </div>
        {elements.length > 0 && (
          <span className="my-2 mr-2">
            <Dropdown
              minimal
              variant={dropdownVariant}
              buttonSize={dropdownSize}
              classNames={{
                button: 'border-none',
              }}
              elements={elements}
            />
          </span>
        )}
      </div>
    </div>
  )
}

StripeInfoCard.defaultProps = {
  elements: [],
  info: {},
  dropdownVariant: 'outline',
  dropdownSize: 'md',
}

StripeInfoCard.propTypes = {
  bgColor: PropTypes.string,
  name: PropTypes.string.isRequired,
  href: PropTypes.string,
  description: PropTypes.string,
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
  dropdownVariant: PropTypes.oneOf([
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
  dropdownSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
}

export default StripeInfoCard
