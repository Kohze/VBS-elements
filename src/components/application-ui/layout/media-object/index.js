import React from 'react'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

const mediaPositions = ['left', 'right']

const variants = {
  basic: 'flex-shrink-0',
  centered: 'flex-shrink-0 self-center',
  bottom: 'flex-shrink-0 self-end',
  'basic-responsive': 'flex-col sm:flex-row',
  'wide-responsive': 'flex-col sm:flex-row sm:items-center',
}

const VBSMediaObject = ({
  imageLink,
  mediaPosition,
  title,
  titleClassName,
  descriptionClassName,
  description,
  variant,
  className,
  imageClassName,
}) => {
  const boolImageLink = !!imageLink
  const boolResponsive =
    variant === 'basic-responsive' || variant === 'wide-responsive'
  return (
    <div
      className={twMerge(
        boolResponsive ? 'sm:flex' : 'flex',
        mediaPosition === 'right' && 'flex-row-reverse',
        className,
      )}
    >
      <div
        className={twMerge(
          boolResponsive && 'mb-4 sm:mb-0',
          variant === 'wide-responsive' && 'ml-0 mr-0',
          variant === 'wide-responsive' && variant === 'right' && 'sm:ml-4',
          variant === 'wide-responsive' && variant === 'left' && 'sm:mr-4',
          mediaPosition === 'right' ? 'sm:ml-4' : 'sm:mr-4',
          variants[variant],
        )}
      >
        {!boolImageLink ? (
          <svg
            className={twMerge(
              'w-16 h-16 text-gray-300 bg-white border border-gray-300',
              variant === 'wide-responsive' && 'w-full sm:w-16',
            )}
            preserveAspectRatio="none"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 200 200"
            aria-hidden="true"
          >
            <path
              vectorEffect="non-scaling-stroke"
              strokeWidth={1}
              d="M0 0l200 200M0 200L200 0"
            />
          </svg>
        ) : (
          <div className={twMerge('relative w-16 h-16', imageClassName)}>
            <Image src={imageLink} alt={title} layout="fill" />
          </div>
        )}
      </div>
      <div>
        <h4 className={twMerge('text-lg font-bold', titleClassName)}>
          {title}
        </h4>
        <p className={twMerge('mt-1', descriptionClassName)}>{description}</p>
      </div>
    </div>
  )
}

VBSMediaObject.propTypes = {
  imageLink: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(Object.keys(variants)),
  mediaPosition: PropTypes.oneOf(mediaPositions),
}

export default VBSMediaObject
