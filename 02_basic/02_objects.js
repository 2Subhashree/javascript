// Object.create

// object literals
const mySym = Symbol("key1")

const jsUser = {
    name: "subha",
    age: 23,
    [mySym]: "mykey1",
    location: "BBSR",
    email: "subha@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser[mySym])

// jsUser.email = "subhashree@gmail.com"
// Object.freeze(jsUser)
// jsUser.email = "subha@example.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}
// console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

