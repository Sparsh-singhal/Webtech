// let x=20;
// let y=x;
// y=30;
// console.log(x);
// let person = {
//     name:"Jhon",
//     age: 30,
//     isEmployed:true,
//     // person2: {
//     //     greet: function(){
//     //         console.log("Hello, "+ this.name);
//     //         console.log(this);
//     //     }
//     // },
//     address: {
//         city:"meerut",
//         state:""
//     },
//     greet: function(){
//             console.log("Hello, "+ this.name);
//             console.log(this);
//             let innergreet = function(){
//                 console.log("Hello, "+ this.name);
//                 console.log(this);
//             }
//             // let innergreet = ()=>{console.log("Hello, "+this.name)};
//             // innergreet();
//             innergreet.call(this);
//         }
// }

// // person.person2.greet();
// person.greet();

// class address {
//     constructor(city,state){
//         this.city=city;
//         this.state=state;
//     }
// }

// class human {
//     constructor(name, age,address){
//         this.name=name;
//         this.age=age;
//         this.address =address;
//     }
// }
// let address1 = new address("meerut","UP");
// let human1= new human("sparsh",18,address1);
// console.log(human1.address
// );

// let arr =[1,2,3];
// let [a,b,c,d] = arr;
// let [e,f] = arr;
// let [g, ,h] = arr;
// console.log(a)
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g)
// console.log(h)

// const data=[5];
// const[x,y=10]=data;
// console.log(x)
// console.log(y)
// const[p=10,q=10,r="hello"]=data;
// console.log(p)
// console.log(q)
// console.log(r)
let person={name:"sparsh",
    age:18,
    ph:8433011510
};
// const[s,t]=person;
// console.log(s);
// console.log(t);
const{name:a,age:b,ph:c}=person;
console.log(a);
console.log(b);
const{name:d,ph:e}=person;
const{ph:f,name:g}=person;
