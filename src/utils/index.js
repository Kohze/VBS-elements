export const getFirstCharsOfName = (name) => {
  if (!name) return
  const nameArray = name.split(' ')
  if (nameArray.length === 1) {
    return nameArray[0].charAt(0)
  }
  const firstName = nameArray[0]
  const lastName = nameArray[nameArray.length - 1]
  const firstCharsOfFirstName = firstName ? firstName.slice(0, 1) : ''
  const firstCharsOfLastName = lastName ? lastName.slice(0, 1) : ''
  return `${firstCharsOfFirstName}${firstCharsOfLastName}`.toUpperCase()
}
