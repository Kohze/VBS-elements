import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'
import { v4 as uuidv4 } from 'uuid'
import AvatarStack from '@/components/application-ui/elements/avatar-stack'
import Icon from '@/components/application-ui/elements/icon'
import InfoItem from '@/components/application-ui/list-items/info-item'

const StackedList = ({ items, groupedItems, iconName }) => {
  const renderlinkItem = (item) => {
    return (
      <a
        href={item.href}
        className="flex items-center justify-between px-4 hover:bg-gray-50"
        key={uuidv4()}
      >
        <div
          className={twMerge(
            'flex-1 min-w-0 ',
            item.additionalInfo && 'md:grid md:grid-cols-2 md:gap-4',
            item.avatarStack && 'flex justify-between items-center gap-4',
          )}
        >
          <InfoItem {...item} />
          {item.additionalInfo && (
            <span className="hidden md:block">
              <InfoItem {...item.additionalInfo} />
            </span>
          )}
          {item.avatarStack && (
            <span className="hidden mr-4 md:block">
              <AvatarStack
                items={item.avatarStack}
                className="flex-shrink-0"
                size="xs"
              />
            </span>
          )}
        </div>
        <Icon iconName={iconName} />
      </a>
    )
  }

  const renderUlist = (items) => {
    return (
      <ul role="list" className="relative z-0 divide-y divide-gray-200">
        {items.map((item) => {
          return item.href ? (
            renderlinkItem(item)
          ) : (
            <InfoItem {...item} key={uuidv4()} />
          )
        })}
      </ul>
    )
  }

  if (groupedItems) {
    return (
      <nav className="h-full overflow-y-auto" aria-label="Directory">
        {groupedItems.map((groupItem) => (
          <div key={uuidv4()} className="relative">
            <div className="sticky top-0 z-10 px-6 py-1 text-sm font-medium text-gray-500 border-t border-b border-gray-200 bg-gray-50">
              <h3>{groupItem.title}</h3>
            </div>
            {renderUlist(groupItem.items)}
          </div>
        ))}
      </nav>
    )
  }

  return renderUlist(items)
}

StackedList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string,
      withAvatar: PropTypes.bool,
      avatarPosition: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
      avatarSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
      title: PropTypes.string.isRequired,
      metaList: PropTypes.arrayOf(
        PropTypes.shape({
          iconName: PropTypes.string,
          name: PropTypes.string,
        }),
      ),
      iconColor: PropTypes.string,
      iconPosition: PropTypes.oneOf(['left', 'right']),
      actions: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          iconName: PropTypes.string,
          onClick: PropTypes.func,
        }),
      ),
    }),
  ),
  groupedItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          imageSrc: PropTypes.string,
          withAvatar: PropTypes.bool,
          avatarPosition: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
          avatarSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
          title: PropTypes.string.isRequired,
          metaList: PropTypes.arrayOf(
            PropTypes.shape({
              iconName: PropTypes.string,
              name: PropTypes.string,
            }),
          ),
          iconColor: PropTypes.string,
          iconPosition: PropTypes.oneOf(['left', 'right']),
          stamp: PropTypes.string,
          actions: PropTypes.arrayOf(
            PropTypes.shape({
              text: PropTypes.string,
              iconName: PropTypes.string,
              onClick: PropTypes.func,
            }),
          ),
          classNames: PropTypes.shape({
            className: PropTypes.string,
            infoClassName: PropTypes.string,
            titleClassName: PropTypes.string,
            descriptionClassName: PropTypes.string,
            stampClassName: PropTypes.string,
            metaListClassName: PropTypes.string,
            actionsClassName: PropTypes.string,
            avatarClassName: PropTypes.string,
          }),
        }),
      ),
    }),
  ),
  iconName: PropTypes.string,
}

export default StackedList
