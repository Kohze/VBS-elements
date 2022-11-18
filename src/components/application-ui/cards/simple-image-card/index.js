import PropTypes from 'prop-types'
import NextLink from 'next/link'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

const SimpleImageCard = ({
  imageSrc,
  title,
  subtitle,
  description,
  href,
  classNames,
  bgColor,
}) => {
  return (
    <div
      className={twMerge('relative ', classNames?.container)}
      style={{ backgroundColor: bgColor }}
    >
      <div
        className={twMerge(
          'block w-full overflow-hidden rounded-lg bg-gray-100 group aspect-w-10 aspect-h-7 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100',
          classNames?.imageContainer,
        )}
      >
        <Image
          src={imageSrc}
          alt={title}
          className={twMerge(
            'object-cover pointer-events-none',
            href && 'group-hover:opacity-90',
            classNames?.image,
          )}
          layout="fill"
        />
        {href && (
          <NextLink legacyBehavior href={href}>
            <a className="absolute inset-0 focus:outline-none">
              <span className="sr-only">View details for {title}</span>
            </a>
          </NextLink>
        )}
      </div>
      <p
        className={twMerge(
          'block mt-2 font-medium text-gray-900 truncate pointer-events-none text-md',
          classNames?.title,
        )}
      >
        {title}
      </p>
      {subtitle && (
        <p
          className={twMerge(
            'block text-sm font-medium text-gray-400 pointer-events-none',
            classNames?.subtitle,
          )}
        >
          {subtitle}
        </p>
      )}
      {description && (
        <p
          className={twMerge(
            'block text-sm text-gray-500 pointer-events-none',
            classNames?.description,
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

SimpleImageCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  href: PropTypes.string,
  classNames: PropTypes.shape({
    container: PropTypes.string,
    imageContainer: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    subtitle: PropTypes.string,
  }),
  bgColor: PropTypes.string,
}

export default SimpleImageCard
