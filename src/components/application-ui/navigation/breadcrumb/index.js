import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'
import { Icon } from '@/components/application-ui/elements'
import NextLink from 'next/link'

const variants = {
  simple: {
    nav: 'flex',
    ol: 'flex items-center space-x-4',
  },
  bar: {
    nav: 'flex',
    ol: 'flex space-x-4 rounded-md px-6 shadow',
  },
}

const Breadcrumb = ({
  pages,
  variant,
  homeIconName,
  dividerIconName,
  classNames,
  linkColor,
  currentColor,
  homeIconColor,
  dividerIconColor,
  fullWidth,
}) => {
  return (
    <nav
      className={twMerge(variants[variant].nav, classNames?.nav)}
      aria-label="Breadcrumb"
    >
      <ol
        role="list"
        className={twMerge(
          'flex items-center space-x-4',
          variants[variant].ol,
          fullWidth && 'w-full',
          classNames?.list,
        )}
      >
        <li className="flex">
          <div className="flex items-center">
            <a href="#" className="text-gray-300 hover:text-gray-400">
              <Icon
                iconName={homeIconName}
                className={'flex-shrink-0 w-5 h-5'}
                aria-hidden="true"
                style={{ color: homeIconColor }}
              />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name} className="flex">
            <div className="flex items-center">
              {variant === 'simple' && (
                <Icon
                  iconName={dividerIconName}
                  className="flex-shrink-0 w-5 h-5 text-gray-300"
                  aria-hidden="true"
                  style={{ color: dividerIconColor }}
                />
              )}
              {variant === 'bar' && (
                <svg
                  className="flex-shrink-0 w-6 h-full text-gray-200"
                  viewBox="0 0 24 44"
                  preserveAspectRatio="none"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
                </svg>
              )}
              <NextLink legacyBehavior href={page.href}>
                <a
                  className={twMerge(
                    'ml-4 text-sm font-medium text-gray-400 hover:text-gray-600',
                    classNames?.link,
                    page.current && classNames?.current,
                  )}
                  style={{ color: page.current ? currentColor : linkColor }}
                  aria-current={page.current ? 'page' : undefined}
                >
                  {page.name}
                </a>
              </NextLink>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}

Breadcrumb.defaultProps = {
  variant: 'simple',
  classNames: {
    current: 'text-gray-800 pointer-events-none font-medium',
  },
  homeIconName: 'home',
  dividerIconName: 'chevron-right',
}

Breadcrumb.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string,
      current: PropTypes.bool,
    }),
  ).isRequired,
  variant: PropTypes.oneOf(Object.keys(variants)),
  fullWidth: PropTypes.bool,
  homeIconName: PropTypes.string,
  dividerIconName: PropTypes.string,
  linkColor: PropTypes.string,
  currentColor: PropTypes.string,
  homeIconColor: PropTypes.string,
  dividerIconColor: PropTypes.string,
  classNames: PropTypes.shape({
    nav: PropTypes.string,
    list: PropTypes.string,
    link: PropTypes.string,
    current: PropTypes.string,
  }),
}

export default Breadcrumb
