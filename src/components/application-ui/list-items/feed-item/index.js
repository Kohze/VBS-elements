import React from 'react'
import { twMerge } from 'tailwind-merge'
import Icon from '../../elements/icon'
import PropTypes from 'prop-types'
import NextLink from 'next/link'
import Avatar from '../../elements/avatar'

const variants = ['default', 'comment', 'assignment', 'tags']

const FeedItem = ({
  length,
  index,
  variant,
  imageSrc,
  iconName,
  iconBg,
  iconColor,
  text,
  person,
  assigned,
  comment,
  time,
}) => {
  const renderDefault = () => (
    <div className="relative flex space-x-3">
      <div>
        {imageSrc ? (
          <Avatar size="sm" imageSrc={imageSrc} />
        ) : (
          <span
            className={twMerge(
              'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white',
            )}
            style={{ backgroundColor: iconBg }}
          >
            <Icon iconName={iconName} color={iconColor} />
          </span>
        )}
      </div>
      <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
        <div className="text-sm text-gray-500">
          {text}{' '}
          <NextLink href={person.href}>
            <a className="text-sm font-medium text-gray-900">{person.name}</a>
          </NextLink>
        </div>
        <div className="text-sm text-right text-gray-500 whitespace-nowrap">
          <time>{time}</time>
        </div>
      </div>
    </div>
  )

  const renderComment = () => (
    <div className="relative flex items-start space-x-3">
      <div className="relative">
        <img
          className="flex items-center justify-center w-10 h-10 bg-gray-400 rounded-full ring-8 ring-white"
          src={imageSrc}
          alt=""
        />

        <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
          <Icon
            className="w-4 h-4 text-gray-400"
            aria-hidden="true"
            iconName="chat-bubble-left-ellipsis"
          />
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <div>
          <div className="text-sm">
            <a href={person.href} className="font-medium text-gray-900">
              {person.name}
            </a>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">Commented {time}</p>
        </div>
        <div className="mt-2 text-sm text-gray-700">
          <p>{comment}</p>
        </div>
      </div>
    </div>
  )

  const renderAssignment = () => (
    <>
      <div>
        <div className="relative px-1">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full ring-8 ring-white">
            <Icon
              iconName="user-circle"
              className="w-5 h-5 text-gray-500"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
      <div className="min-w-0 flex-1 py-1.5">
        <div className="text-sm text-gray-500">
          <a href={person.href} className="font-medium text-gray-900">
            {person.name}
          </a>{' '}
          assigned{' '}
          <a href={assigned.href} className="font-medium text-gray-900">
            {assigned.name}
          </a>{' '}
          <span className="whitespace-nowrap">{date}</span>
        </div>
      </div>
    </>
  )

  const renderItem = () => {
    switch (variant) {
      case 'comment':
        return renderComment()
      case 'assignment':
        return renderAssignment()
      default:
        return renderDefault()
    }
  }

  return (
    <li className="list-none">
      <div className="relative pb-8">
        {length > 1 && index !== length - 1 ? (
          <span
            className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
            aria-hidden="true"
          />
        ) : null}
        {renderItem()}
      </div>
    </li>
  )
}

FeedItem.defaultProps = {
  variant: 'default',
  comment: '',
  person: {
    name: 'Person Name',
    href: '#',
  },
  assigned: {
    name: 'Assigned Name',
    href: '#',
  },
}

FeedItem.propTypes = {
  length: PropTypes.number.isRequired,
  iconName: PropTypes.string,
  iconBg: PropTypes.string,
  iconColor: PropTypes.string,
  text: PropTypes.string,
  target: PropTypes.string,
  time: PropTypes.string,
  variant: PropTypes.oneOf(variants),
  person: PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string,
  }),
  assigned: PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string,
  }),
  comment: PropTypes.string,
}

export default FeedItem
