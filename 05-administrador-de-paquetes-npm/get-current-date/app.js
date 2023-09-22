const dayjs = require('dayjs')

const today = dayjs()

console.log('today', today.get('hour'), today.get('day'))