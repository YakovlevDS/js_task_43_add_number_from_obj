// ? Task:Реализуй функцию addNumbers, которая принимает объектobject и возвращает сумму всех числовых значений в объекте

// Пример:

// const object = {
//   one: 1,
//   two: '2',
//   three: 3,
// };

// addNumbers(object); // return 4

// Explanation:
// 1 + 3 = 4;
// const object = {
//   foo: 'js',
//   bar: 'fe',
//   boo: 3,
//   spam: 10,
//   egg: 11,
// };

// addNumbers(object); // return 24

// Explanation:
// 3 + 10 + 11 = 24;


// Solution 1

const object = {
  foo: "js",
  bar: "fe",
  boo: 3,
  spam: 10,
  egg: 11,
};
const object1 = {
  one: 1,
  two: "2",
  three: 3,
};

function addNumbers(object) {
    let sum = 0;
    for (let key in object) {
        if (typeof (object[key]) === 'number') {
           sum += object[key]; 
      }
    }
    return sum
}
console.log(addNumbers(object));
console.log(addNumbers(object1));


// ! Explanation: typeOf for-in
