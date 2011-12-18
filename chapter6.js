/* Chapter 6 */

/*

***Creating Object
-
var person = new Object();
person.name = "Erman"; // properties 1
person.age = 21; // properties 2

person.sayName = function() { // method
    alert(this.name); // this!
}

The Factory Pattern
- Obje yaratma işini abstract etmeye yarar.
function createPerson (name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;

    o.sayName = function() {
        alert(this.name);
    };

    return o;
}

var person1 = createPerson("erman", 20, "student");

The Constructor Pattern
- normal birer fonksiyonlar aslında. tek farklılık çağırılışlarında. Şöyle bir problem var, fonksiyonlar da birer obje
olduklarından her method aslında ayrı birer fonksiyon olacak:
alert(person1.sayName == person2.sayName); //false
Çözüm ise method'u constructor ın dışında tanımlamak.

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    this.sayName = function() {
        alert(this.name);
    };
}

var person1 = new Person("Erman", 20, "student");

The Prototype Pattern
-
function Person(){
}

Person.prototype.name = “Nicholas”;
Person.prototype.age = 29;
Person.prototype.job = “Software Engineer”;
Person.prototype.sayName = function(){
    alert(this.name);
};

var person1 = new Person();
person1.sayName();	// ”Nicholas”

alert(person1.sayName == person2.sayName); //true
// böylelikle method'ların farklı olması konusunu hallettik

Prototypes
- Bir fonksiyon yaratıldığında, arka tarafta prototype'ı da yaratılır. Default, her ptorotype'ın bir property'si vardır:
constructor.

??? prototypes ???

Combination Constructor/Prototype Pattern
-

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = [“Shelby”, “Court”];
}

Person.prototype = {
    constructor: Person,
    sayName : function () {
      alert(this.name);
    }
};

alert(person1.sayName === person2.sayName); //true
alert(person1.friends === person2.friends); //false

***Inheritance***
-