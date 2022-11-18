import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

const gridKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'none']

const gridColumns = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
  none: 'grid-cols-none',
}

const gridColumnsSm = {
  1: 'sm:grid-cols-1',
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4',
  5: 'sm:grid-cols-5',
  6: 'sm:grid-cols-6',
  7: 'sm:grid-cols-7',
  8: 'sm:grid-cols-8',
  9: 'sm:grid-cols-9',
  10: 'sm:grid-cols-10',
  11: 'sm:grid-cols-11',
  12: 'sm:grid-cols-12',
  none: 'sm:grid-cols-none',
}

const gridColumnsMd = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
  7: 'md:grid-cols-7',
  8: 'md:grid-cols-8',
  9: 'md:grid-cols-9',
  10: 'md:grid-cols-10',
  11: 'md:grid-cols-11',
  12: 'md:grid-cols-12',
  none: 'md:grid-cols-none',
}

const gridColumnsLg = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
  7: 'lg:grid-cols-7',
  8: 'lg:grid-cols-8',
  9: 'lg:grid-cols-9',
  10: 'lg:grid-cols-10',
  11: 'lg:grid-cols-11',
  12: 'lg:grid-cols-12',
  none: 'lg:grid-cols-none',
}

const gridGap = {
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-3',
  lg: 'gap-4',
  xl: 'gap-5',
  '2xl': 'gap-6',
  '3xl': 'gap-8',
  '4xl': 'gap-10',
  '5xl': 'gap-12',
}

const Grid = ({
  children,
  columns,
  columnsSm,
  columnsMd,
  columnsLg,
  gap,
  className,
}) => {
  return (
    <div
      className={twMerge(
        'grid',
        gridColumns[columns],
        gridColumnsSm[columnsSm],
        gridColumnsMd[columnsMd],
        gridColumnsLg[columnsLg],
        gridGap[gap],
        className,
      )}
    >
      {children}
    </div>
  )
}

Grid.defaultProps = {
  columns: 1,
  gap: 'md',
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.oneOf(gridKeys),
  columnsSm: PropTypes.oneOf(gridKeys),
  columnsMd: PropTypes.oneOf(gridKeys),
  columnsLg: PropTypes.oneOf(gridKeys),
  gap: PropTypes.oneOf(Object.keys(gridGap)),
  className: PropTypes.string,
}

export default Grid
