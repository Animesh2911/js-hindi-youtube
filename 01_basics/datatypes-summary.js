//primitive

// 7 types : String, Number, Boolean, null, undefined, symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 345632123n



// Reference (Non primitive)

//Array, Object, Functions


const heroes = ["shaktiman", "naagaraj", " daoa"];
let myObj = {
    name: "animesh",
    age: 22,
}
const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof outsidesTemp)


// MEMORY
// STACK(PRIMITIVE ME STACK MEMORY USE HOTA HAI), HEAP(NON-PRIMITIVE ME HEAP MEMORY USE HOTI HAI)

let myYoutubename = "animesh.com"

let anothername = myYoutubename

anothername = "chaiaurcode"
console.log(anothername)
console.log(myYoutubename)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "animesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);