import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

const VBSSectionHeading = ({
  title,
  titleClassName,
  description,
  descriptionClassName,
  label,
  labelClassName,
  actionButtons,
  renderTabs,
}) => {
  return (
    <div
      className={twMerge(
        'pb-5 border-b border-gray-200',
        actionButtons && 'sm:flex sm:justify-between sm:items-center',
      )}
    >
      <div>
        <h3
          className={twMerge(
            'text-lg font-medium leading-6 text-gray-900',
            titleClassName,
          )}
        >
          {title}
          {label && (
            <span
              className={twMerge(
                'mt-1 ml-2 text-sm font-light text-gray-500 truncate',
                labelClassName,
              )}
            >
              {label}
            </span>
          )}
        </h3>
        {description && (
          <p
            className={twMerge(
              'max-w-4xl mt-2 text-sm text-gray-500',
              descriptionClassName,
            )}
          >
            {description}
          </p>
        )}
        {renderTabs && renderTabs()}
      </div>
      {!!actionButtons && <div className="flex gap-2">{actionButtons()}</div>}
    </div>
  )
}

VBSSectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  titleClassName: PropTypes.string,
  description: PropTypes.string,
  descriptionClassName: PropTypes.string,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  actionButtons: PropTypes.func,
}

export default VBSSectionHeading
