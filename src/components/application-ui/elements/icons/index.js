import { lookupHeroIcon } from '@/assets/icons/hero-icons/lookup'

const VBSIcon = ({ iconName = 'ArrowLeftIcon' }) => {
  const Icon = lookupHeroIcon(iconName)
  return (
    <div>
      <Icon className="flex h-5 w-5" />
    </div>
  )
}

export default VBSIcon
