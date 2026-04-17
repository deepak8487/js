 let myName = "Deepak"
let mySalary = Number(20000)
let yourSalary = mySalary
yourSalary = Number(90000);// change the value of yourSalary but it will not change the value of mySalary because it is a primitive data type and it is stored in stack memory and it is passed by value

let Idolname =  "Shivay"
myName = Idolname
myName = "Lucifer"// change the value of myName but it will not change the value of Idolname because it is a primitive data type and it is stored in stack memory and it is passed by value

console.log(myName)
console.log(mySalary)
console.log(yourSalary)
console.log(Idolname)

let userone = { name : "Deepak", age : 24}
let usertwo = userone
usertwo.name = "Shivay"// change the value of usertwo.name but it will change the value of userone.name because it is a reference data type and it is stored in heap memory and it is passed by reference
console.log(userone)
console.log(usertwo)

let userthree = { email : "deepak@example.com", 
    upi : "deepak@okaxis"}
let userfour = userthree
userfour.email = "lucifer@example.com"// change the value of userfour.email but it will change the value of userthree.email because it is a reference data type and it is stored in heap memory and it is passed by reference
console.log(userthree)
console.log(userfour)   
