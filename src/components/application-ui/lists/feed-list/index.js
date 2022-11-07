import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import FeedItem from '../../list-items/feed-item'

const FeedList = ({ timeline }) => {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {timeline?.map((event, i) => (
          <FeedItem
            length={timeline.length}
            index={i}
            {...event}
            key={uuidv4()}
          />
        ))}
      </ul>
    </div>
  )
}

FeedList.propTypes = {
  timeline: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string,
      iconBg: PropTypes.string,
      iconColor: PropTypes.string,
      text: PropTypes.string,
      target: PropTypes.string,
      time: PropTypes.string,
      variant: PropTypes.oneOf(['default', 'assignment', 'tags', 'comment']),
      person: PropTypes.shape({
        name: PropTypes.string,
        href: PropTypes.string,
      }),
      assigned: PropTypes.shape({
        name: PropTypes.string,
        href: PropTypes.string,
      }),
      comment: PropTypes.string,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          href: PropTypes.string,
          iconName: PropTypes.string,
          iconColor: PropTypes.string,
          textColor: PropTypes.string,
          color: PropTypes.string,
        }),
      ),
    }),
  ),
}

export default FeedList
