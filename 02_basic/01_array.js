const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman", "nagaraj"]

const myArr2 = new Array(1,2,3,4)

console.log(myArr[1]);

//array methods

// myArr.push(6)
// myArr.pop()
// myArr.unshift(6)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

//slice, splice

// console.log("A", myArr);

// const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1,3)
// console.log("C", myArr);
// console.log(myn2);


//part-2

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const anotherArray = [1,2,3, [4,5,6],[7,8,6],[4,5,3]]
const real_another_array = anotherArray.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("subha"))
console.log(Array.from("subha"))
console.log(Array.from({name: "subha"}))

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
