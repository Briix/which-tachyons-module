const tachyonsModules = require('tachyons-modules')
const fs = require('fs')
const cssResolve = require('style-resolve').sync
const extract = require('extract-from-css')

const moduleBlacklist = [
  'react-native-style-tachyons',
  'tachyons-base',
  'tachyons-build-css',
  'tachyons-debug',
  'tachyons-debug-children',
  'tachyons-debug-grid',
  'tachyons-x-ray',
  'tachyons-display-verbose',
  'tachyons-verbose',
  'tachyons-webpack',
  'img',
  'jekyll-tachyons',
  'tachyons-and-react',
  'tachyons-custom'
]

const inBlacklist = value =>
  moduleBlacklist.indexOf(value) === -1 ? true : false

const returnNames = arr =>
  arr.map((x) => x.name)

const resolve = value =>
  cssResolve(value, { basedir: __dirname })

const readFile = file =>
  fs.readFileSync(resolve(file), 'utf8')

const reject = arr =>
  arr.filter(inBlacklist)

const generate = arr =>
  arr.map((x) => ({
    name: x,
    values: extract.extractClasses(readFile(x))
  }))

const toJSON = data =>
  JSON.stringify(data, null, 2)

const addExport = json =>
  `module.exports = ${json}`

const writeFile = data =>
  new Promise((res, rej) => {
    fs.writeFile('data.js', addExport(data), (err, result) => {
      if (err) { rej(err) }
      res(result);
    })
  })

tachyonsModules()
  .then(returnNames)
  .then(reject)
  .then(generate)
  .then(toJSON)
  .then(writeFile)
  .catch(e => console.log(e))
