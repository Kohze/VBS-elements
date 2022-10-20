import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'
import { css } from '@emotion/css'

const roundedSizes = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full',
  none: 'rounded-none',
}

const shadowSizes = {
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
  xl: 'shadow-xl',
  '2xl': 'shadow-2xl',
  inner: 'shadow-inner',
  normal: 'shadow',
  none: 'shadow-none',
}

const VBSEmptyCard = ({
  children,
  backgroundColor,
  color,
  className,
  roundSize,
  shadowSize,
}) => {
  const additonalStyles = css`
    background-color: ${backgroundColor};
    color: ${color};
  `

  return (
    <div
      className={twMerge(
        'overflow-hidden',
        roundedSizes[roundSize],
        shadowSizes[shadowSize],
        className,
        additonalStyles,
      )}
    >
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  )
}

VBSEmptyCard.defaultProps = {
  roundSize: 'md',
  shadowSize: 'normal',
}

VBSEmptyCard.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  roundSize: PropTypes.oneOf(Object.keys(roundedSizes)),
  shadowSize: PropTypes.oneOf(Object.keys(shadowSizes)),
}

export default VBSEmptyCard