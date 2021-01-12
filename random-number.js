const getTime = new Date().getTime()
const getTimeString = getTime.toString()
const rand = +getTimeString.charAt(getTimeString.length - 1)
console.log(rand)