import PropTypes from 'prop-types'
import NextLink from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import { twMerge } from 'tailwind-merge'
import VBSIcon from '../../elements/icon'

const variants = {
  default: {
    tab: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
    tabMain:
      'group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm',
    current: 'border-indigo-500 text-indigo-600',
    wrapper: 'border-b border-gray-200',
  },
  pills: {
    tab: 'text-gray-500 hover:text-gray-700',
    tabMain: 'px-3 py-2 font-medium text-sm rounded-md',
    current: 'bg-gray-100 text-gray-700',
    wrapper: '',
  },
}

const VBSTab = ({
  variant,
  tabs,
  shallowLink,
  tabItemClassName,
  currentClassName,
  iconPosition,
  fullWidth,
}) => {
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className={twMerge(variants[variant].wrapper)}>
          <nav className="flex -mb-px space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <NextLink href={tab.href} key={uuidv4()} shallow={shallowLink}>
                <a
                  key={tab.name}
                  href={tab.href}
                  className={twMerge(
                    variants[variant].tabMain,
                    tab.current
                      ? currentClassName || variants[variant].current
                      : tabItemClassName || variants[variant].tab,
                    tab.iconName && 'flex items-center space-x-1',
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                >
                  {iconPosition === 'left' && (
                    <VBSIcon iconName={tab.iconName} />
                  )}
                  <span>{tab.name}</span>
                  {iconPosition === 'right' && (
                    <VBSIcon iconName={tab.iconName} />
                  )}
                </a>
              </NextLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

VBSTab.defaultProps = {
  shallowLink: false,
  iconPosition: 'left',
  fullWidth: false,
  variant: 'default',
}

VBSTab.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      current: PropTypes.bool,
      iconName: PropTypes.string,
    }),
  ).isRequired,
  /**
   * shallowLink: Update the path of the current page without rerunning getStaticProps,
   */
  shallowLink: PropTypes.bool,
  tabItemClassName: PropTypes.string,
  currentClassName: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  fullWidth: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'pills']),
}

export default VBSTab
