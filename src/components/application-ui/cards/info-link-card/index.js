import { twMerge } from 'tailwind-merge'
import PropTypes from 'prop-types'
import { Icon } from '@/components/application-ui/elements'
import NextLink from 'next/link'

const iconVariants = {
  teal: 'text-teal-700 bg-teal-50',
  purple: 'text-purple-700 bg-purple-50',
  rose: 'text-rose-700 bg-rose-50',
  sky: 'text-sky-700 bg-sky-50',
  lime: 'text-lime-700 bg-lime-50',
  amber: 'text-amber-700 bg-amber-50',
  emerald: 'text-emerald-700 bg-emerald-50',
  cyan: 'text-cyan-700 bg-cyan-50',
  fuchsia: 'text-fuchsia-700 bg-fuchsia-50',
  indigo: 'text-indigo-700 bg-indigo-50',
  slate: 'text-slate-700 bg-slate-50',
}

const iconPosition = ['left', 'right', 'middle']

const iconSizes = {
  xs: 'w-6 h-6 p-1',
  sm: 'w-10 h-10 p-2',
  md: 'w-16 h-16 p-3',
  lg: 'w-20 h-20 p-4',
  xl: 'w-24 h-24 p-5',
}

const InfoLinkCard = ({
  title,
  description,
  href,
  backgroundColor,
  titleColor,
  descriptionColor,
  iconName,
  iconBackgroundColor,
  iconVariant,
  iconColor,
  iconSize,
  iconPosition,
  classNames,
}) => {
  return (
    <div
      key={title}
      className={twMerge(
        'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg border border-slate-200 hover:border-slate-300',
        classNames?.main,
      )}
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div
        className={twMerge(
          'flex',
          iconPosition === 'left' && 'justify-start',
          iconPosition === 'right' && 'justify-end mr-6',
          iconPosition === 'middle' && 'justify-center',
        )}
      >
        <Icon
          iconName={iconName}
          iconType="outline"
          className={twMerge(
            'rounded-lg inline-flex p-3',
            iconSizes[iconSize],
            iconVariants[iconVariant],
            classNames?.icon,
          )}
          style={{ backgroundColor: iconBackgroundColor, color: iconColor }}
        />
      </div>
      <div className="mt-8">
        <h3
          className={twMerge('text-lg font-medium', classNames?.title)}
          style={{ color: titleColor }}
        >
          <NextLink legacyBehavior href={href}>
            <a className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              {title}
            </a>
          </NextLink>
        </h3>
        <p
          className={twMerge(
            'mt-2 text-sm text-gray-500',
            classNames?.description,
          )}
          style={{ color: descriptionColor }}
        >
          {description}
        </p>
      </div>
      <span
        className={twMerge(
          'absolute text-gray-300 pointer-events-none top-6 right-6 group-hover:text-gray-400',
          classNames?.arrow,
        )}
        aria-hidden="true"
      >
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
        </svg>
      </span>
    </div>
  )
}

InfoLinkCard.defaultProps = {
  iconVariant: 'indigo',
  iconSize: 'sm',
  iconPosition: 'left',
}

InfoLinkCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  titleColor: PropTypes.string,
  descriptionColor: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  iconVariant: PropTypes.oneOf(Object.keys(iconVariants)),
  iconBackgroundColor: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.oneOf(Object.keys(iconSizes)),
  iconPosition: PropTypes.oneOf(iconPosition),
  classNames: PropTypes.shape({
    main: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string,
    arrow: PropTypes.string,
  }),
}

export default InfoLinkCard
