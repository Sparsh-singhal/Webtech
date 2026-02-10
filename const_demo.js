//no redeclaration
//block scope i.e. can be redeclared in different block scopes
//must initialize at time of declaration
//value cannot be reassigned
//const only make the refference constant not the value i.e. we can push pop change array elements as reffrence doen,t change by doing this so allowed
const pi=3.14
const arr = [1,2,"hello"]
console.log(arr)
arr.push(3)
console.log(arr)
arr= [4,5,6]
console.log(arr)