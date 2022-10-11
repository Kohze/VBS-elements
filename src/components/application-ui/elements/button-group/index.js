import { css } from '@emotion/css'
import { twMerge } from 'tailwind-merge'
import VBSButton from '../button'
import PropTypes from 'prop-types'

export const sizes = ['xs', 'sm', 'md', 'lg', 'xl']
export const variants = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'outline',
  'dark',
]

export const kinds = ['square', 'rounded', 'circular']

const VBSButtonGroup = ({
  elements,
  iconPosition,
  iconType,
  size,
  variant,
  kind,
  disabled,
  className,
  buttonClassName,
  backgroundColor,
  color,
  ...props
}) => {
  const additionalStyles = css`
    background-color: ${backgroundColor};
    color: ${color};
  `

  return (
    <span
      className={twMerge('inline-flex rounded-md shadow-sm isolate', className)}
    >
      {elements
        ? elements?.map((element, index) => (
            <VBSButton
              key={index}
              text={element.text}
              iconName={element.iconName}
              iconPosition={iconPosition}
              iconType={iconType}
              size={size}
              variant={variant}
              className={twMerge(
                'focus:focus:ring-offset-0 focus:ring-1',
                index === 0 &&
                  kind === 'rounded' &&
                  'rounded-l-md rounded-r-none',
                index === 0 &&
                  kind === 'circular' &&
                  'rounded-l-full rounded-r-none',
                index === 0 &&
                  kind === 'square' &&
                  'rounded-l-none rounded-r-none',
                index === elements.length - 1 &&
                  kind === 'rounded' &&
                  'rounded-l-none rounded-r-md',
                index === elements.length - 1 &&
                  kind === 'circular' &&
                  'rounded-l-none rounded-r-full',
                index === elements.length - 1 &&
                  kind === 'square' &&
                  'rounded-l-none rounded-r-none',
                index > 0 && index < elements.length - 1 && 'rounded-none',
                buttonClassName,
                additionalStyles,
              )}
              disabled={disabled}
              style={{ ...props.style }}
              {...props}
            />
          ))
        : null}
    </span>
  )
}

VBSButtonGroup.defaultProps = {
  elements: [],
  iconPosition: 'left',
  iconType: 'solid',
  size: 'md',
  variant: 'primary',
  kind: 'rounded',
}

VBSButtonGroup.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      iconName: PropTypes.string,
    }),
  ),
  iconPosition: PropTypes.oneOf(['left', 'right', 'only']),
  size: PropTypes.oneOf(sizes),
  variant: PropTypes.oneOf(variants),
  kind: PropTypes.oneOf(kinds),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
}

export default VBSButtonGroup
