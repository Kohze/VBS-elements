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
      content: PropTypes.string.isRequired,
      href: PropTypes.string,
      time: PropTypes.string,
      iconName: PropTypes.string,
      iconBg: PropTypes.string,
      iconColor: PropTypes.string,
    }),
  ),
}

export default FeedList
