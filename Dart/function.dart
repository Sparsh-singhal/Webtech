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

void main(){
    int result=add(10,20);
    print(result);
    int square(int n)=> n*n;
    print(square((5)));
    greet("sparsh");
    greet("sparsh","ER.");
}