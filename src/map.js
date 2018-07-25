'use strict'

const map = (arr = [], func = (item) => item) => {
  let newArr = []
  arr.map((item) => newArr.push(func(item)))
  return newArr
}

export default map