// function Student(name,age) {
//     this.name = name;
//     this.age = age;
//    }
//    var stu1 = new Student("John", 50);
   
//    // Object have proto property 
//    console.log(stu1);
   
//    // Also if apply strict equal to check 
//    // if both point at the same 
//    // location then it will return true.
//    Student.prototype === stu1.__proto__

// Constructor function
function Student(name, age) {
    this.name = name;
    this.age = age;
}

// Objects
var stu1 = new Student("gfg1", 25);
var stu2 = new Student("gfg2", 42);

// Prototype
Student.prototype.getName = function() { return this.name; }


// Function have property prototype
// Student

// Function call using object
stu1.getName();

// Constructor function
function Student(name, age) {
    this.name = name;
    this.age = age;
}

// Objects
var stu1 = new Student("gfg1", 25);
var stu2 = new Student("gfg2", 42);

// Prototype
Student.prototype.getName = function() { return this.name; }


// Function have property prototype
// Student

// function call using object
stu1.getName();

// Access prototype
Student.prototype


   