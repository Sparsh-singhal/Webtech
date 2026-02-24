//define class
class Student{
  String name;
  int age;

  //constructor
  Student(this.name,this.age);

  //method
  void display(){
    print("Name: $name, Age: $age");
  }
}


void main(){
  //Creting object
  Student s1 = Student("Sparsh", 21);

  s1.display();
}