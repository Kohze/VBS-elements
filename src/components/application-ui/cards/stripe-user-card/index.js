import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'
import NextLink from 'next/link'
import { Avatar } from '@/components/application-ui/elements'
import { EmptyCard } from '@/components/application-ui/cards'

const StripeUserCard = ({ user, avatarSize, avatarKind, classNames }) => {
  return (
    <EmptyCard className="relative flex items-center px-6 py-5 space-x-3 bg-white border rounded-xl hover:border-gray-400">
      <div className="flex-shrink-0">
        <Avatar
          imageSrc={user?.imageSrc}
          personName={user?.name}
          size={avatarSize}
          kind={avatarKind}
        />
      </div>
      <div className="flex-1 min-w-0">
        {user?.href ? (
          <NextLink href={user.href || ''}>
            <a className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">{user.name}</p>
              <p className="text-sm text-gray-500 truncate">{user.role}</p>
            </a>
          </NextLink>
        ) : (
          <>
            <span className="absolute inset-0" aria-hidden="true" />
            <p className="text-sm font-medium text-gray-900">{user.name}</p>
            <p className="text-sm text-gray-500 truncate">{user.role}</p>
          </>
        )}
      </div>
    </EmptyCard>
  )
}

StripeUserCard.propTypes = {
  user: PropTypes.shape({
    imageSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    role: PropTypes.string,
  }),
  avatarSize: PropTypes.oneOf([
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    '2xl',
    '3xl',
    '4xl',
  ]),
  avatarKind: PropTypes.oneOf(['circular', 'rounded', 'square']),
}

export default StripeUserCard
