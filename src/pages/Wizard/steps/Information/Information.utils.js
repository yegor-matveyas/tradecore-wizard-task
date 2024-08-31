export function fakeFetch(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: 200, message: 'Success', data })
    }, 1000)
  })
}

export function dateToString(date = new Date()) {
  const year = date.getFullYear()
  const month = toTwoDigits(date.getMonth() + 1)
  const day = toTwoDigits(date.getDate())
  return `${year}-${month}-${day}`
}

function toTwoDigits(value) {
  return value < 10 ? '0' + value : value
}
