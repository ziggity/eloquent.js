function reverseArrayInPlace (arr) {
  for (let i = 0, last = arr.length - 1; i < last / 2; i += 1) {
    let temp = arr[i] 
    arr[i] = arr[last - i]
    arr[last - i] = temp
  }
  return arr
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 7]))

function fizzBuzz (num) {
  for (let i = 1; i <= num; i += 1) {
    if (!(i % 15)) console.log('FizzBuzz')
    else if (!(i % 3)) console.log('Fizz')
    else if (!(i % 5)) console.log('Buzz')
    else console.log(i)
  }
}

fizzBuzz(100)

function bubbleSort (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr
}

console.log(bubbleSort([8, -8, 5, 3, -6, 15, 7, 1, 2]))

function caesarCipher (str, num) {
  num %= 26
  const lowerCaseStr = str.toLowerCase()
  const alphabet = 'absdefghijklmnopqrstuvwxyz'.split('')
  let newString = ''
  for (let i = 0, max = lowerCaseStr.length; i < max; i += 1) {
    const currentLetter = lowerCaseStr[i]
    if (currentLetter === ' ') {
      newString += currentLetter
      continue
    }
    const currentIndex = alphabet.indexOf(currentLetter)
    let newIndex = currentIndex + num
    if (newIndex > 25) newIndex -= 26
    if (newIndex < 0) newIndex += 26
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase()
    } else {
      newString += alphabet[newIndex]
    }
  }
  return newString
}

function fibonacci (position) {
  if (position <= 2) return 1
  else return fibonacci(position - 1) + fibonacci(position - 2)
}

function maxStockProfit (prices) {
  let maxProfit = -1
  let buyPrice = 0
  let sellPrice = 0
  let shouldUpdateBuyPrice = true
  prices.forEach((price,  i) => {
    
    if (shouldUpdateBuyPrice) buyPrice = price
    sellPrice = prices[i + 1]
    if (sellPrice < buyPrice) shouldUpdateBuyPrice = true
    else {
      const tmpProfit = sellPrice - buyPrice
      if (tmpProfit > maxProfit) maxProfit = tmpProfit
      shouldUpdateBuyPrice = false
    }
    console.log(price, i)
  })
  // other way to write for of loop: instead of forEach
  for (let [index, val] of prices.entries()) {
        console.log('new',index, val)  
}
  return maxProfit
}
