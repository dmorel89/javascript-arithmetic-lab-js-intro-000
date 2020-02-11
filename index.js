function add( a, b){
   var number = b + a
  console.log(number)
 }
function subtract( a, b){
   var number = a - b
console.log(number)
 }
function multiply(a, b){
  var number = b * a
  console.log(number)
}
function divide(a, b){
  var number = a / b
  console.log(number)
}

function increment(a){
  var number = a += 4
  console.log(number)
}

function decrement(a){
  var number = a -= 4
  console.log(number)
}
function makeInt(n){
 console.log(parseInt(n, 10))

}

function preserveDecimal(n){
 console.log(parseFloat(n))
  }

 add(34, 87)
 subtract(356, 159)
 multiply ( 4, 56)
 divide (10, 5)
increment(34)
decrement(166)
makeInt( "567")
preserveDecimal('80.123999')
preserveDecimal("I'm alive")
