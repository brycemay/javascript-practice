// Lexical scope (static scope)
// global scope - defined outside of all code blocks
// local scope - defined inside a code block

//in a scope you can access variables defined in that scope or in any parent/ancestor scope

// global scope (varOne)
    // local scope (varTwo)
    //local scope (varThree)

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)
}

if(true) {
    let varThree = 'varThree'
}

console.log(varTwo)