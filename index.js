// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function(){
//         console.log('draw')
//     }
// }
// circle.draw()

// Factory Function
// function createCircle (radius){
//     return {
//         radius, // when key and value are the same then in ES6 we can use only key and delete the value
//         draw: function (){
//             console.log('draw')
//         }
//     }
// }
// const circle = createCircle(1)

// Constructor Function
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// Circle.call({}, 1) // the {} is new object which similar to the 'new' and 1 is argument
// Circle.apply({}, [1,2,3]) // when using apply we passing array if there is multiple arguments, this is useful when there is array somewhere in application and you want to pass the array into Object
// const another = new Circle(1);

// Primitives: string, number, boolean, null, undefined
// References: Object, function (which also Object in Javascript), array (which also another type of Object)
// Primitives are copied by the value
// Objects are copied by their reference

// let number = 10
// function increase(number){
//     number++;
// }
// increase(number)
// console.log(number)
// 10 <--- because the number is primitive and increase function is object which number that was call in function is completely different 'number'

// let obj = {value: 10}
// function increase(obj){
//     obj++;
// }
// increase(obj)
// console.log(obj)
// 11 <--- because the obj is reference and obj in the function also reference which mean they same type.

// for (let key in circle) {
//     console.log(key, circle[key])
// }
// radius 10
// draw f()

// for(let key in circle) {
//     if(circle[key] !== 'function') {
//         console.log(key, circle[key])
//     }
// }
// radius 10

// const keys = Object.keys(circle)
// console.log(keys)
// radius 10
// (2) ['radius', 'draw']



