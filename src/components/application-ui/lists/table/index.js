import PropTypes from 'prop-types'
import { Fragment } from 'react'
import { twMerge } from 'tailwind-merge'
import { v4 as uuidv4 } from 'uuid'

const VBSTable = ({
  title,
  description,
  fullWidth,
  striped,
  stackedColumns,
  stickyHeader,
  verticalLines,
  uppercasedHeading,
  groupedTableItems,
  tableItems,
  renderTableActions,
  renderTableItemActions,
  tableClassName,
  theadClassName,
  theadTrClassName,
  thClassName,
  tbodyClassName,
  tbodyTrClassName,
  tdClassName,
}) => {
  const isGrouped = !!groupedTableItems?.length
  const headings = isGrouped
    ? Object.keys(groupedTableItems[0].tableItems[0])
    : Object.keys(tableItems[0])

  const renderTableBody = (items) => {
    return items.length > 0
      ? items.map((item, i) => {
          const values = Object.values(item)
          return (
            <tr
              key={uuidv4()}
              className={twMerge(
                verticalLines && 'divide-x divide-gray-200',
                striped && i % 2 === 0 && 'bg-gray-50',
                tbodyTrClassName,
              )}
            >
              {values.map((value, i) => {
                const isStacked =
                  stackedColumns.length > 0 && stackedColumns?.includes(i + 1)
                return (
                  <td
                    key={uuidv4()}
                    className={twMerge(
                      'px-3 py-4 text-sm text-gray-500 whitespace-pre-line sm:whitespace-nowrap',
                      isStacked && 'hidden md:table-cell',
                      stickyHeader && 'border-b border-gray-200',
                      tdClassName,
                    )}
                  >
                    {value}
                    <dl className="font-normal lg:hidden">
                      {i === 0 &&
                        Object.keys(item).map((_, i) => {
                          const isStacked =
                            stackedColumns.length > 0 &&
                            stackedColumns?.includes(i + 1)
                          return isStacked ? (
                            <dd key={uuidv4()}>
                              <span className="text-sm text-gray-500">
                                {values[i]}
                              </span>
                            </dd>
                          ) : null
                        })}
                    </dl>
                  </td>
                )
              })}
              {renderTableItemActions && (
                <td className="px-3 py-4 text-sm font-medium text-right whitespace-nowrap">
                  {renderTableItemActions(item)}
                </td>
              )}
            </tr>
          )
        })
      : null
  }

  const renderGroupedTableBody = () => {
    return groupedTableItems.length > 0
      ? groupedTableItems.map((group, i) => (
          <Fragment key={uuidv4()}>
            <tr className="border-t border-gray-200">
              <th
                colSpan={headings.length + 1}
                scope="colgroup"
                className="px-4 py-2 text-sm font-semibold text-left text-gray-900 bg-gray-50 sm:px-6"
              >
                {group.name}
              </th>
            </tr>
            {renderTableBody(group.tableItems)}
          </Fragment>
        ))
      : null
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
          <p className="mt-2 text-sm text-gray-700">{description}</p>
        </div>
        {renderTableActions && (
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            {renderTableActions()}
          </div>
        )}
      </div>
      <div className="flex flex-col mt-8">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div
            className={twMerge(
              'inline-block min-w-full py-2 align-middle md:px-6 lg:px-8',
              (fullWidth || stickyHeader) && 'px-0 md:px-0 lg:px-0',
            )}
          >
            <div
              className={twMerge(
                'overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg',
                (fullWidth || stickyHeader) && 'md:rounded-none',
                stickyHeader && 'overflow-visible',
              )}
            >
              <table
                className={twMerge(
                  'min-w-full divide-y divide-gray-300',
                  stickyHeader && 'border-separate',
                  tableClassName,
                )}
                style={stickyHeader ? { borderSpacing: 0 } : null}
              >
                <thead className={twMerge('bg-gray-50', theadClassName)}>
                  <tr
                    className={twMerge(
                      verticalLines && 'divide-x divide-gray-200',
                      theadTrClassName,
                    )}
                  >
                    {headings.length > 0
                      ? headings.map((key, i) => {
                          const isStacked =
                            stackedColumns && stackedColumns.includes(i + 1)

                          return (
                            <th
                              key={uuidv4()}
                              scope="col"
                              className={twMerge(
                                'px-3 py-3.5 text-left text-sm font-semibold text-gray-900 capitalize',
                                uppercasedHeading && 'uppercase',
                                isStacked && 'hidden md:table-cell',
                                stickyHeader &&
                                  'sticky top-0 z-10 bg-opacity-80 backdrop-blur backdrop-filter bg-gray-50 border-b border-gray-300',
                                thClassName,
                              )}
                            >
                              {key}
                            </th>
                          )
                        })
                      : null}
                    {renderTableItemActions && (
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Actions</span>
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody
                  className={twMerge(
                    'bg-white divide-y divide-gray-200',
                    tbodyClassName,
                  )}
                >
                  {isGrouped
                    ? renderGroupedTableBody()
                    : renderTableBody(tableItems)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

VBSTable.defaultProps = {
  tableItems: [],
  groupedTableItems: [],
  striped: false,
  verticalLines: false,
  uppercasedHeading: false,
  fullWidth: false,
  stickyHeader: false,
  stackedColumns: [],
}

VBSTable.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  fullWidth: PropTypes.bool,
  striped: PropTypes.bool,
  /**
   * stackedColumns is an array of column numbers that should be stacked on mobile
   * e.g. [1, 2] will stack the first two columns
   */
  stackedColumns: PropTypes.array,
  stickyHeader: PropTypes.bool,
  verticalLines: PropTypes.bool,
  uppercasedHeading: PropTypes.bool,
  /**
   * render props for table actions
   */
  renderTableActions: PropTypes.func,
  /**
   * table items an array of objects
   * each object should have the same keys
   * and the keys should be the same as the table header
   */
  tableItems: PropTypes.arrayOf(PropTypes.object.isRequired),
  /**
   * groupedTableItems an array of objects but its different from tableItems.
   * groupedTableItems contains tableItems as an array of objects and group name
   * each object should have the same keys.
   * if you will use grouped table you should use groupTableItems instead of tableItems
   */
  groupedTableItems: PropTypes.arrayOf(PropTypes.object.isRequired),
  /**
   * render props for table item action buttons
   */
  renderTableItemActions: PropTypes.func,
  tableClassName: PropTypes.string,
  theadClassName: PropTypes.string,
  theadTrClassName: PropTypes.string,
  thClassName: PropTypes.string,
  tbodyClassName: PropTypes.string,
  tbodyTrClassName: PropTypes.string,
  tdClassName: PropTypes.string,
}

export default VBSTable
