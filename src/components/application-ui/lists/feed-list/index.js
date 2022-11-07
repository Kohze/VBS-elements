import { twMerge } from 'tailwind-merge'
import Icon from '../../elements/icon'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

const timeline = [
  {
    content: 'Applied to',
    target: 'Front End Developer',
    href: '#',
    date: 'Sep 20',
    iconName: 'user',
    iconBg: 'bg-gray-400',
    iconColor: '#fff',
  },
  {
    content: 'Advanced to phone screening by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 22',
    iconName: 'hand-thumb-up',
    iconBg: 'bg-blue-500',
    iconColor: '#fff',
  },
  {
    content: 'Completed phone screening with',
    target: 'Martha Gardner',
    href: '#',
    date: 'Sep 28',
    iconName: 'check',
    iconBg: 'bg-green-500',
    iconColor: '#fff',
  },
  {
    content: 'Advanced to interview by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 30',
    iconName: 'hand-thumb-up',
    iconBg: 'bg-blue-500',
    iconColor: '#fff',
  },
  {
    content: 'Completed interview with',
    target: 'Katherine Snyder',
    href: '#',
    date: 'Oct 4',
    iconName: 'check',
    iconBg: 'bg-green-500',
    iconColor: '#fff',
  },
]

const FeedList = ({ timeline }) => {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={uuidv4()}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={twMerge(
                      event.iconBg,
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white',
                    )}
                  >
                    <Icon iconName={event.iconName} color={event.iconColor} />
                  </span>
                </div>
                <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{' '}
                      <a
                        href={event.href}
                        className="font-medium text-gray-900"
                      >
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="text-sm text-right text-gray-500 whitespace-nowrap">
                    <time>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

FeedList.propTypes = {
  timeline: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      target: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      iconName: PropTypes.string.isRequired,
      iconBg: PropTypes.string.isRequired,
      iconColor: PropTypes.string.isRequired,
    }),
  ),
}

export default FeedList
