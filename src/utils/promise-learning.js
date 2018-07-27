'use strict'

const fs = require('fs')
const path = require('path')

const readFile = (filePath, charset) => new Promise((resolve, reject) => {
  fs.readFile(filePath, charset, (err, result) => {
    if(err) return reject(err)
    resolve(result)
  })
})
/*
readFile(path.join(__dirname, '..', '..', 'package.json'), 'utf-8')
  .then((result) => JSON.parse(result).devDependencies)
  .then((devDependencies) => console.log(devDependencies))
  .catch((error) => console.log('error', error))*/

const read = async () =>  {
  try {
    const result = await readFile(path.join(__dirname, '..', '..', 'package.json'), 'utf-8')
    console.log(JSON.parse(result).devDependencies)  
  } catch (error) {
    console.log('error', error)
  }
  
}

read()