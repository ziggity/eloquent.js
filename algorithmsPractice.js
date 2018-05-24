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

function meanMedianMode (arr) {
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  }
}

function getMean (arr) {
  let sum = arr.reduce((prev, next) => prev + next, 0)
  return sum / arr.length
}

function getMedian (arr) {
  arr.sort((a, b) => a - b)
  const len = arr.length
  if (len % 2 !== 0) {
    return arr[Math.floor(len / 2)]
  } else {
    return (arr[len / 2 - 1] + arr[len / 2]) / 2
  }
}

function getMode (arr) {
  let modeObj = {}
  arr.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0
    modeObj[num]++
  })

  let maxFreq = 0
  let mode = []
  for (let num in modeObj) {
    if (modeObj[num] > maxFreq) {
      mode = [num]
      maxFreq = modeObj[num]
    } else if (modeObj[num] === maxFreq) {
      mode.push(modeObj[num])
    }
  }
  if (mode.length === Object.keys(modeObj).length) mode = []
  return mode
}

console.log(meanMedianMode([9, 10, 23, 10, 23, 9]))

function fibonacciMemoized (position, cache = []) {
  if (cache[position]) return cache[position]
  else {
    if (position < 3) return 1
    cache[position] = fibonacciMemoized(position - 1, cache) + fibonacciMemoized(position - 2, cache)
    return cache[position]
  }
}

console.log(fibonacciMemoized(25))

function mergeSort (arr) {
  const len = arr.length
  if (len < 2) return arr
  const midIndex = Math.floor(len / 2)
  return merge(mergeSort(arr.slice(0, midIndex)), mergeSort(arr.slice(midIndex)))
}

function merge (arr1, arr2) {
  const result = []
  while (arr1.length && arr2.length) {
    let minElem
    if (arr1[0] < arr2[0]) minElem = arr1.shift()
    else minElem = arr2.shift()
    result.push(minElem)
  }
  return result.concat(arr1, arr2)
}

console.log(mergeSort([4, 7, -4, 3, -7, 4, 9, 2]))



let str = "hello WORLD LILY";

 function cap(str){
  str = str.toLowerCase().split(' ');// ['hello','world','lily']
   let result = '';
   
  str.forEach((ele)=>{
              result += ele[0].toUpperCase() + ele.substr(1,ele.length-1) + ' ';
              
              })
              return result
}
console.log(cap(str));

function palindrome(str){
  let str2 =  str.replace(/[^a-z]/gi, "");
 
  let str1 = str2;
  console.log('str2:',str2)
  let str3 = '';
  for(let i=str2.length-1; i>=0; i--){
    str3 += str2[i];
    console.log(str2[str2.length-1])
  }
  return str3 === str1
  
}
console.log(palindrome(str));

// or 

function isPalindrome (string) {
  string = string.toLowerCase()
  const charactersArr = string.split('')
  const validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('')

  const lettersArr = []
  charactersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char)
  })

  return lettersArr.join('') === lettersArr.reverse().join('')
}

isPalindrome("Madam, I'm Adam")

function harmlessRansomNote (noteText, magazineText) {
  let noteArr = noteText.split(' ')
  let magazineArr = magazineText.split(' ')
  let noteIsPossible = true

  const magazineObj = {}

  magazineArr.forEach(word => {
    if (!magazineObj[word]) {
      magazineObj[word] = 0
    }
    magazineObj[word]++
  })

  noteArr.forEach(word => {
    if (magazineObj[word]) {
      console.log(magazineObj[word])
      magazineObj[word]--
      console.log(magazineObj)
      if (magazineObj[word] < 0) {
        noteIsPossible = false
      }
    } else {
      noteIsPossible = false
    }
  })
  return noteIsPossible
}

harmlessRansomNote('this is a note', 'note that this is noted in a notebook')
function reverseWords (inputString) {
  return inputString.split(' ').map((word) => {
    let newString = ''
    for (let i = word.length; i > 0; i -= 1) {
      newString += word[i - 1]
      console.log(newString)
    }
    return newString
  }).join(' ')
}

console.log(reverseWords('js is great'))

function sieve (target) {
  const primesArr = new Array(target).fill(true)
  console.log(primesArr)
  primesArr[0] = false
  primesArr[1] = false
  for (let i = 2, max = Math.sqrt(target); i < max; i++) {
    for (let j = 2; j * i <= target; j++) {
      primesArr[i * j] = false
    }
  }

  return primesArr.map((val, index) => {
    if (val) return index
   
  }).filter(val => val)
   console.log('val',val)
}

console.log(sieve(200))
