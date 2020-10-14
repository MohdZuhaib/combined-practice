/*
var john = {
    name: 'John',
    yearOfBirth: 1998,
    job: 'teacher'
};

//Function cunstructor
// name of cunstructor must start with caps
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this.calculateAge=function(){
    //     console.log(2020-this.yearOfBirth)
    // } if we move calcAge to person prototype it will still work

}

Person.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfBirth)
}
Person.prototype.lastName = 'Smith'

//Constructor in action

var john = new Person('John', 1995, 'teacher');
// new keyword will create an empty object and will allow this keyword to point to this new object just created
console.log(john)
john.calculateAge();

// another new object

var jane = new Person('Jane', 1990, 'Lawyer')
console.log(jane)
jane.calculateAge();

// another new object

var jannet = new Person('Jennet', 1996, 'Architect')
console.log(jannet)
jannet.calculateAge();

console.log(john.lastName)
console.log(jane.lastName)
console.log(jannet.lastName)
*/

/*
var person = function(name, yearOfBirth, job) {

    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
    this.calculateAge = function() {
        console.log(this.name + '`s age is ' + (2020 - yearOfBirth))
    }

}

var john = new person('John', 1994, 'teacher')
console.log(john)
john.calculateAge();

var kate = new person('Kate', 1995, 'Student')
console.log(kate)
kate.calculateAge();
*/


/*****************************************
 *         Object.create
 */

// var personProto = {
//     calculateAge: function() {
//         console.log(2016 - this.yearOfBirth);
//     }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1995;
// john.job = 'teacher';

// var jane = Object.create(personProto,

//     {
//         name: { value: 'Jane' },
//         yearOfBirth: { value: 1996 },
//         job: { value: 'Designer' }
//     }


// )


// -- Primitives vs objects


// Primitives
var a = 23
var b = a;
a = 26
console.log(a)
console.log(b); // a and b will have different values coz b is  totally another object which holds a`s previous value


// Objects
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age); // Here obj1 n obj2 will have same value coz obj2 ain`t new object rather its just a new "reference" to obj1


// Functions