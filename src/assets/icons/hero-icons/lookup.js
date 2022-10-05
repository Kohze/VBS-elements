import heroIconsNames from './names'
import { lookup as outlineLookup } from './outline'
import { lookup as solidLookup } from './solid'

export const lookupHeroIcon = (iconName, variant = 'outline') => {
  if (!heroIconsNames.includes(iconName)) {
    throw new Error(`Icon name ${iconName} not found`)
  }
  if (variant === 'outline') {
    return outlineLookup[iconName]
  }
  if (variant === 'solid') {
    return solidLookup[iconName]
  }

  throw new Error(`Variant ${variant} not found`)
}
