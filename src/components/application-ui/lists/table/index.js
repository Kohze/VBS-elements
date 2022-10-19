import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'
import { v4 as uuidv4 } from 'uuid'

const VBSTable = ({
  title,
  description,
  tableItems,
  renderTableActionButtons,
  renderTableItemActionButtons,
}) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
          <p className="mt-2 text-sm text-gray-700">{description}</p>
        </div>
        {renderTableActionButtons && (
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            {renderTableActionButtons()}
          </div>
        )}
      </div>
      <div className="flex flex-col mt-8">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  {Object.keys(tableItems[0]).map((key) => (
                    <th
                      key={uuidv4()}
                      scope="col"
                      className={twMerge(
                        'px-3 py-3.5 text-left text-sm font-semibold text-gray-900 capitalize',
                      )}
                    >
                      {key}
                    </th>
                  ))}
                  {renderTableItemActionButtons && (
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Actions</span>
                    </th>
                  )}
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tableItems.map((item) => {
                    const values = Object.values(item)
                    return (
                      <tr key={item.id}>
                        {values.map((value) => {
                          return (
                            <td
                              key={uuidv4()}
                              className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap"
                            >
                              {value}
                            </td>
                          )
                        })}
                        {renderTableItemActionButtons && (
                          <td className="px-3 py-4 text-sm font-medium text-right whitespace-nowrap">
                            {renderTableItemActionButtons(item)}
                          </td>
                        )}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

VBSTable.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  /**
   * render props for table action buttons
   */
  renderTableActionButtons: PropTypes.func,
  tableItems: PropTypes.array.isRequired,
  /**
   * render props for table item action buttons
   */
  renderTableItemActionButtons: PropTypes.func,
}

export default VBSTable
