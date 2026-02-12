// rest operator(...) 



//with arrays

let arr1 = [1,2,3]
let arr2 = [...arr1,4,5]  //copies elements
console.log(arr2)

arr2[0]=100;
console.log(arr1)  //creates a deep copy
console.log(arr2)
//with objects
let emp = {id:1,name:"Rahul"};
let details = {...emp,role:"developer"} //merges objects (deep copy)
console.log(details)
console.log(emp)  //role isn't added in emp
details.id=2;
console.log(details)
console.log(emp)

let arr3=[1,2,{name:"john"}];
let arr4=[...arr3]
console.log(arr4)
arr4[1]=10
console.log(arr3)
console.log(arr4)

arr4[2].name = 'Jane'
console.log(arr3)
console.log(arr4)
//the above behavior shows that if its a primitive value, it will be copied by value, but if its object,
// it will be copied by reference. so in this case arr2 is a new array but the object inside it is the same as the one in arr1.


//rest operator(...) collects / bundles values

function sum(...numbers){
    return numbers.reduce((a,b) => a+b,0)
}

a=sum(10,20,30)
console.log(a)