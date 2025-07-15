
//1st : (Default)  way to export a function 
// const add = (a,b)=>{
//         return a + b;
// }

// module.exports = add;

//2nd : (Named) way to export a function
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;

// module.exports.add = add;
// module.exports.subtract = subtract;



// //3rd way to export a function
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;

// module.exports = {add, subtract}


// 4th way to export a function
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;