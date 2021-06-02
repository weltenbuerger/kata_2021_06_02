//  Kata https://www.codewars.com/kata/54ba84be607a92aa900000f1/

function isIsogram(str) {
  !str.length && true
  return ![...str.toLowerCase()].reduce((acc, curr) => {
    return (acc +=
      (str.toLowerCase().match(new RegExp(curr, 'g')) || []).length > 1)
  }, 0)
}

isIsogram('Dermatoglyphics')

// alternative
function isIsogram2(str) {
  return new Set(str.toUpperCase()).size == str.length
}
