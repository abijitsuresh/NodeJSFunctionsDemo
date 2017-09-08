// normal function
function sayHi() {
    console.log('Hi');
}

//sayHi();

function callFunction(fun){
    fun();
};

// function expression
var sayBye = function(){
    console.log('Bye');
};

// sayBye();   
callFunction(sayHi);
callFunction(sayBye);