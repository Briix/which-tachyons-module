const tachyonsModules = require('tachyons-modules')
const moduleBlacklist = [
  'react-native-style-tachyons',
  'tachyons-base',
  'tachyons-build-css',
  'tachyons-debug',
  'tachyons-display-verbose',
  'tachyons-verbose',
  'tachyons-webpack'
]

const inBlacklist = value =>
  moduleBlacklist.indexOf(value) === -1 ? true : false

const returnNames = arr =>
  arr.map((x) => x.name)

const log = item => {
  console.log(item)
  return item
}

const reject = arr =>
  arr.filter(inBlacklist)

tachyonsModules()
  .then(returnNames)
  .then(reject)
  .then(log)
