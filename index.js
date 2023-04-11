

function receivesAFunction(thisIsAFunction) {
thisIsAFunction();
}

function returnsANamedFunction() {
return function namedFunction (){
    console.log('this is a named function')
}
}

function returnsAnAnonymousFunction() {
return function (){
    console.log('this is a function')
}
}

