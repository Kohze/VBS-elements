import PropTypes from 'prop-types'
import NextLink from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import { twMerge } from 'tailwind-merge'
import { Icon } from '@/components/application-ui/elements'

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
    current: 'bg-indigo-100 text-indigo-700',
    wrapper: '',
  },
}

const Tab = ({
  variant,
  tabs,
  shallowLink,
  classNames,
  currentBackgroundColor,
  currentTextColor,
  tabItemBackgroundColor,
  tabItemTextColor,
  tabItemBorderColor,
  tabCountBackgroundColor,
  tabCountTextColor,
  tabCountCurrentBackgroundColor,
  tabCountCurrentTextColor,
  iconPosition,
  bar,
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
          <nav
            className={twMerge(
              'flex -mb-px space-x-8',
              (fullWidth || bar) && 'w-full',
              bar && 'isolate rounded-lg shadow w-full',
            )}
            aria-label="Tabs"
          >
            {tabs.map((tab, i) => (
              <NextLink
                legacyBehavior
                href={tab.href}
                key={uuidv4()}
                shallow={shallowLink}
              >
                <a
                  key={tab.name}
                  href={tab.href}
                  className={twMerge(
                    variants[variant].tabMain,
                    tab.current
                      ? classNames?.current || variants[variant].current
                      : classNames?.tabItem || variants[variant].tab,
                    tab.iconName && 'flex items-center space-x-1',
                    (fullWidth || bar) && 'w-full justify-center',
                    bar && i === 0 && 'rounded-l-lg',
                    bar && i === tabs.length - 1 && 'rounded-r-lg',
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                  style={{
                    backgroundColor: tab.current
                      ? currentBackgroundColor
                      : tabItemBackgroundColor,
                    color: tab.current ? currentTextColor : tabItemTextColor,
                    borderColor: tabItemBorderColor,
                  }}
                >
                  {iconPosition === 'left' && <Icon iconName={tab.iconName} />}
                  <span>{tab.name}</span>
                  {iconPosition === 'right' && <Icon iconName={tab.iconName} />}

                  {tab.count ? (
                    <span
                      className={twMerge(
                        tab.current
                          ? classNames?.tabCountCurrent ||
                              'bg-indigo-100 text-indigo-600'
                          : classNames?.tabCount || 'bg-gray-100 text-gray-900',
                        'hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block',
                      )}
                      style={{
                        backgroundColor: tab.current
                          ? tabCountCurrentBackgroundColor
                          : tabCountBackgroundColor,
                        color: tab.current
                          ? tabCountCurrentTextColor
                          : tabCountTextColor,
                      }}
                    >
                      {tab.count}
                    </span>
                  ) : null}
                </a>
              </NextLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

Tab.defaultProps = {
  shallowLink: false,
  iconPosition: 'left',
  fullWidth: false,
  variant: 'default',
}

Tab.propTypes = {
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
  iconPosition: PropTypes.oneOf(['left', 'right']),
  fullWidth: PropTypes.bool,
  bar: PropTypes.bool,
  variant: PropTypes.oneOf(Object.keys(variants)),
  tabCountBackgroundColor: PropTypes.string,
  tabCountTextColor: PropTypes.string,
  tabCountCurrentBackgroundColor: PropTypes.string,
  tabCountCurrentTextColor: PropTypes.string,
  tabItemBackgroundColor: PropTypes.string,
  tabItemTextColor: PropTypes.string,
  tabItemBorderColor: PropTypes.string,
  currentBackgroundColor: PropTypes.string,
  currentTextColor: PropTypes.string,
  classNames: PropTypes.shape({
    tab: PropTypes.string,
    current: PropTypes.string,
    tabCount: PropTypes.string,
    tabCountCurrent: PropTypes.string,
  }),
}

export default Tab
