import heroIconsNames from '@/assets/icons/hero-icons/names'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'
import { Button, Icon } from '@/components/application-ui/elements'
import { css } from '@emotion/css'

const variants = [
  'simple',
  'with-label',
  'with-icon',
  'with-title',
  'with-button',
  'with-title-and-button',
]
const positions = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end',
}

const Divider = ({
  variant,
  position,
  label,
  classNames,
  iconName,
  iconSize,
  iconColor,
  buttonText,
  buttonSize,
  buttonIconName,
  buttonIconPosition,
  buttonKind,
  title,
  dividerColor,
  onClickButton,
}) => {
  const additionalIconStyles = css`
    color: ${iconColor};
  `
  const additionalDividerStyles = css`
    border-color: ${dividerColor};
  `

  const getVariant = () => {
    switch (variant) {
      case 'simple':
        return null
      case 'with-label':
        return (
          <span
            className={twMerge(
              'px-2 text-sm text-gray-500 bg-white',
              classNames?.label,
            )}
          >
            {label}
          </span>
        )
      case 'with-icon':
        return (
          <span
            className={twMerge(
              'px-2 text-gray-500 bg-white',
              additionalIconStyles,
              classNames?.icon,
            )}
          >
            <Icon
              aria-hidden="true"
              iconName={iconName}
              size={iconSize}
              width={iconSize?.width}
              height={iconSize?.height}
            />
          </span>
        )
      case 'with-title':
        return (
          <span
            className={twMerge(
              'px-3 text-lg font-medium text-gray-900 bg-white',
              classNames?.title,
            )}
          >
            {title}
          </span>
        )
      case 'with-button':
        return (
          <Button
            size={buttonSize}
            variant="outline"
            kind={buttonKind}
            text={buttonText}
            iconName={buttonIconName}
            iconPosition={buttonIconPosition}
            className={classNames?.button}
            onClick={onClickButton}
          />
        )
      case 'with-title-and-button':
        return (
          <>
            <span
              className={twMerge(
                'px-3 text-lg font-medium text-gray-900 bg-white',
                classNames?.title,
              )}
            >
              {title}
            </span>
            <Button
              size={buttonSize}
              variant="outline"
              kind={buttonKind}
              text={buttonText}
              iconName={buttonIconName}
              iconPosition={buttonIconPosition}
              className={classNames?.button}
              onClick={onClickButton}
            />
          </>
        )
    }
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div
          className={twMerge(
            'w-full border-t border-gray-300',
            additionalDividerStyles,
            classNames?.main,
          )}
        ></div>
      </div>
      <div
        className={twMerge(
          'relative flex',
          positions[position],
          variant === 'with-title-and-button' && 'justify-between',
        )}
      >
        {getVariant()}
      </div>
    </div>
  )
}

Divider.defaultProps = {
  variant: 'simple',
  position: 'center',
  iconName: 'plus',
  iconSize: 'sm',
  buttonSize: 'xs',
  buttonIconName: 'plus',
  buttonIconPosition: 'left',
  buttonKind: 'circular',
}

Divider.propTypes = {
  variant: PropTypes.oneOf(variants),
  position: PropTypes.oneOf(Object.keys(positions)),
  label: PropTypes.string,
  iconName: PropTypes.oneOf(heroIconsNames),
  iconSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  iconColor: PropTypes.string,
  buttonText: PropTypes.string,
  buttonSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  buttonKind: PropTypes.oneOf(['square', 'rounded', 'circular']),
  buttonIconName: PropTypes.oneOf(heroIconsNames),
  buttonIconPosition: PropTypes.oneOf(['left', 'right']),
  buttonClassName: PropTypes.string,
  title: PropTypes.string,
  onClickButton: PropTypes.func,
  /**
   * The `classNames` prop is an object that contains the classNames for the different elements.
   */
  classNames: PropTypes.shape({
    main: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    title: PropTypes.string,
    button: PropTypes.string,
  }),
}

export default Divider
