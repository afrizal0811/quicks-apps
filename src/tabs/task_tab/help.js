export const items = [
  {
    key: '1',
    label: 'Personal Errands',
  },
  {
    key: '2',
    label: 'Urgent To-Do',
  },
]

export const deleteItem = [
  {
    key: '1',
    label: 'Delete',
  },
]

export const daysLeft = (date) => {
  function convertDate(dateString) {
    let parts = dateString.split('/')
    let formattedDate = parts[1] + '/' + parts[0] + '/' + parts[2]
    return formattedDate
  }

  if (date) {
    const now = new Date()
    const nextDate = new Date(convertDate(date))
    const differenceTime = nextDate.getTime() - now.getTime()
    const differenceDay = Math.round(differenceTime / (1000 * 3600 * 24)) + 1
    return differenceDay > 0 ? differenceDay : 0
  }
  return
}
