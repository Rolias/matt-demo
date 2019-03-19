// console.log("Hello World")

const matt = {
  firstName: "Matt",
  lastName: "Capizzi",
  notHim: "Matt Pizzi",
}


const sayHi = (param) => {
  // console.log("say hi", param)
  console.log(`say hi ${stringify(matt)}`)
  console.log(matt)

}

const stringify = (someObject) => {
  return JSON.stringify(someObject, null, 8)
}

sayHi("Matt")



