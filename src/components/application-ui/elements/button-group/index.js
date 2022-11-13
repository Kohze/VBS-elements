import { css } from '@emotion/css'
import { twMerge } from 'tailwind-merge'
import { Button } from '@/components/application-ui/elements'
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

const ButtonGroup = ({
  elements,
  iconPosition,
  iconType,
  size,
  variant,
  kind,
  disabled,
  classNames,
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
      className={twMerge(
        'inline-flex rounded-md shadow-sm isolate',
        classNames?.main,
      )}
    >
      {elements
        ? elements?.map((element, index) => (
            <Button
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
                classNames?.button,
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

ButtonGroup.defaultProps = {
  elements: [],
  iconPosition: 'left',
  iconType: 'solid',
  size: 'md',
  variant: 'primary',
  kind: 'rounded',
}

ButtonGroup.propTypes = {
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
  /**
   * The `classNames` prop is an object that contains the classNames for the different elements.
   */
  classNames: PropTypes.shape({
    main: PropTypes.string,
    button: PropTypes.string,
  }),
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
}

export default ButtonGroup
