int add(int a,int b){
    return a+b;
}

//positional optional parameters
void greet(String name, [String? title]){
    print("Hello $title $name");
}

//optional params must be at the end
// void greet( [String? title],String name){
//     print("Hello $title $name"); 
// }

//named optional param
//{} used to define named optional param
void greet2({String? name, int? age}){
    print("Name: $name, Age: $age");
}

//required named param
void greet3({required String name}){
    print("Hello $name");
}

//default parameters
//cannot use null safety here
void greet4(String name,[String title = "Mr."]){
    print("Hello $title $name");
}

void main(){
    int result=add(10,20);
    print(result);
    int square(int n)=> n*n;
    greet("sparsh");
    greet("sparsh","ER.");
    greet2(name: "sparsh",age: 21);
    greet3(name: "Sparsh");
}