const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const formatDate = (dateToFormat: string): string => {
  const date = new Date(dateToFormat)
  const day = date.getDay()
  const month = date.getMonth()
  const year = date.getFullYear()

  return `${monthNames[month]} ${day}, ${year}`
}
