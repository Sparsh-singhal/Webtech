let mylet=10;
console.log(mylet);
//let mylet=20; // SyntaxError: Identifier 'mylet' has already been declared
{
    let mylet2=20;
    console.log(mylet2);
}
{
    let mylet2=20; // this redeclaration is allowed as block i.e. scope is different
    console.log(mylet2); 
}

let x=50;
console.log(x);
{
    let x=100;//here inner scope(local) variable has higher priority it is called variable shadowing
    let y=200;
    console.log(x); // it will give 50 if x is not redeclared
    console.log(y);
}


