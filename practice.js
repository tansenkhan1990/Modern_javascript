let myFunction = () => {
    // console.log('this is a arrow function');
    return 'this function just has return type'
}

// for one argument return type function

let myFunction3 = age => age * 3 

//for one argument function
let myArrowFunction = name =>{
    // console.log(myFunction)
    console.log(name);
}

//for multple argument function
let myArrowFunctionw2 = (name,age) =>{
    // console.log(myFunction)
    console.log(name);
}

console.log(myFunction())
myArrowFunction('tansen Khan arrow function')
console.log(myFunction3(30))