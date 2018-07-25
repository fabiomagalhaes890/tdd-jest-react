'use strict'

const map = (arr = [], func = () => item) => {
  let newArray = []
  for(let i = 0; i < arr.lenght; i++)
    newArray.push(func(arr[i]))
  return newArray
}

export default map