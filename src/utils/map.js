'use strict'

const map = (arr = [], func = (item) => item) => {
  if(!Array.isArray(arr))
    throw new TypeError('this first parameter must be an array')

  if(typeof func !== 'function') {
    throw new TypeError('the second parameter must be a function')
  }
  
  let newArr = []
  arr.map((item) => newArr.push(func(item)))
  return newArr 
}

export default map