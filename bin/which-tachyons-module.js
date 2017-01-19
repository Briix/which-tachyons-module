#!/usr/bin/env node

const path = require('path')
const fs = require('fs')
const program = require('commander')
const data = require('../data.js')

const version = '0.2.0'

program
  .version(version)
  .option('[file]', 'HTML file')
  .parse(process.argv)

if (program.args.length) {
  const dir = process.cwd()
  const file = path.join(dir, program.args[0])
  const html = fs.readFileSync(file, 'utf8')

  const regex = /class="(.*?)"/g;
  let match = null
  let classes = []
  while((match = regex.exec(html)) !== null) {
    const classesArr = match[1].split(" ")
    classes = classes.concat(classesArr.filter((item) => {
      return classes.indexOf(item) < 0
    }))
  }

  const moduleNames = classes.map((item) => {
    let moduleName = null
    data.forEach((module) => {
      if (module.values.indexOf(item) >= 0) {
        moduleName = module.name
      }
    })

    return moduleName
  })

  const filteredModuleNames = moduleNames.filter((item, pos) => {
    return moduleNames.indexOf(item) === pos
  })

  process.stdout.write(filteredModuleNames.join(" "))
}
