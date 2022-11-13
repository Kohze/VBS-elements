import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

const SectionHeading = ({
  title,
  description,
  label,
  actionButtons,
  renderTabs,
  renderDropdown,
  classNames,
}) => {
  return (
    <div
      className={twMerge(
        'pb-5 border-b border-gray-200',
        (actionButtons || renderDropdown) &&
          'sm:flex sm:justify-between sm:items-center',
        classNames?.main,
      )}
    >
      <div>
        <h3
          className={twMerge(
            'text-lg font-medium leading-6 text-gray-900',
            classNames?.title,
          )}
        >
          {title}
          {label && (
            <span
              className={twMerge(
                'mt-1 ml-2 text-sm font-light text-gray-500 truncate',
                classNames?.label,
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
              classNames?.description,
            )}
          >
            {description}
          </p>
        )}
        {renderTabs && renderTabs()}
      </div>
      {!!actionButtons && <div className="flex gap-2">{actionButtons()}</div>}
      {!!renderDropdown && renderDropdown()}
    </div>
  )
}

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  label: PropTypes.string,
  actionButtons: PropTypes.func,
  renderTabs: PropTypes.func,
  renderDropdown: PropTypes.func,
  /**
   * The `classNames` prop is an object that contains the classNames for the different elements.
   */
  classNames: PropTypes.shape({
    main: PropTypes.string,
    title: PropTypes.string,
    label: PropTypes.string,
    description: PropTypes.string,
  }),
}

export default SectionHeading
