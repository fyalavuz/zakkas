/* Chapter 5 */

/*

Reference Type
- ECMAScript class'lar, interface'ler gibi bir çok oop olayını JS'de kullanmamıza imkan sağlıyor.

- Reference Type'lar class'la aynı şey demek değil.

- Constructor JS'de de mevcut.

***The Object Type
- Object'ler, reference type'ın bir instance'ı

- 2 yolla yaratılır:
1-
var person = new Object();
person.name = "Pope";
person.age = 20;

2-
var person = {
    name : "Pope";
    "age" : 20; // property isimleri string olarak da yazılabilir
} // bunun ismi "object literal". bi nevi kısayol.

var person = {}; // new Object() ile aynı!
person.name = "Pope";
person.age = 20;

- Güzel bir pattern. Kaç tane arguman alınacağını bilmediğin durumlar için 10 numara iş görüyor.
function displayInfo(args) {
    var output = "";

    if (typeof args.name == "string") {
        output += "Name : " + args.name;
    }

    if (typeof args.age == "number") {
        output += "Age: " + args.age;
    }

    alert(output);
}

displayInfo({
    name: “Nicholas”,
    age: 29
});

displayInfo({
    name: “Greg”
});

- property'lere 2 yolla da ulaşabilirsin:
alert(person[“name”]);	// ”Pope”
alert(person.name);	// ”Pope”

***The Array Type
- Vee bir başka çok kullanılan reference type: array'ler. ECMAScript'te array'ler çok daha farklı kullanılıyorlar diğer
dillere göre. Mesela her bir eleman ayrı bir data type'da değişkene sahip olabiliyor.

- var colors = new Array(); ile yaratıyorsun. kaç elemana ihtiyacın old. biliyorsan Array(20) de verebilirsin. O 20 eleman
undefined olarak yaratılır. Constructor da direk atama da yapabilirsin: var colors = new Array(“red”, “blue”, “green”);

- new'i kullanmaya da bilirsin: var colors = Array(2); gibi

- Bir diğer array yaratma yolu ise: array literal:
var colors = ["red", "blue", "green"];

- array yaratırken x veya y elemanlı array de yaratabilirsin. ama sen kullanma:
var options = [1, 2, ];
Çünkü IE'de 3 eleman yaratılıo: 1, 2 ve undefined ama diğerlerinde 2 falan... bu da zor debug edilebilir bir durum yaratıyor

- lenght. En önemli özelliği sadece read-only değil. lenght'le item'ları remove vs edebilirsin:
var colors = ["red", "blue", "green"];
colors.lenght = 2;
alert(colors[2]); // undefined

- arrays can contain a maximum of 4,294,967,295 items

Conversion Methods
- tüm objeler iu method'lara sahip: toLocalesString(), toString(), valueOf()
var colors = [“red”, “blue”, “green”];
alert(colors.toString()); // red,blue,green
alert(colors.valueOf()); // red,blue,green
alert(colors); // red,blue,green

Stack Methods
- An array object can act just like a stack! (LIFO)
var colors = new Array();
var count = colors.push("red", "green");
alert(count): // 2 çünkü push()'un return value'su array'in count'u. pop() ise son elemanı çıkartop
bizzat elemanın kendisini dönüyor

Queue Methods
- FIFO: shift(), pop(), unshift()

Reordering Methods
- reserve() and sort(). sort string'e çevirip sonra dizio.

Manipulation Methods
- concat()->current array'ın aynısını yaratır. arguman alırsa array'ın sonuna ekler

- slice()-> bir veya iki tane arguman alıyor. slice'lıyor. (If either the start or end position of slice() is a negative
number, then the number is subtracted from the length of the array to determine the appropriate locations. For example,
calling slice(-2,-1) on an array with five items is the same as calling slice(3, 4). If the end position is smaller than
 the start, then an empty array is returned.)

- splice()->belkide en çok işe yarayan array objesi method'u.

***The Date Type
- java.util.Date gibi çalışır
var now = new Date();

- toLocaleString() ve toString()'in browser'lara göre farklı çalıştığını unutmamalı.

- toDateString(), toTimeString(), toLocaleDateString(), toLocaleTimeString() ve toUTCString() date tipindeki objeler
için önemli method'lar

***The RegExp Type
-  Perl'e benzer olarak RegExp tipindeki objelerle yaratılabiliniyor regular expression'lar:
var expression = /pattern/flags;

- her RegExp bu properties'lere sahip: global, ignoreCase, lastIndex, multiline ve source

***The Function Type
- JS'de fonksiyonlar özünde birer obje! her fonksiyon function type objenin bir instance'ı

- function names are simply pointers to function objects and are not necessarily tied to the function itself.
function sum (num1, num2) {
    return num1 + num2;
}

var sum = function(num1, num2) {
    return num1 + num2;
};

No Overloading
- Thinking of function names as pointers also explains why there can be no function overloading in ECMAScript.

Function Internals
- arguments'ı chapter3'te de incelemiştik. bir de this var.

Function Properties and Methods
- Each function has two properties: length and prototype. The length property indicates the number of named arguments
that the function expects. The prototype is the actual location of all instance methods for reference type.

***Built-in Objects
- Global ve Math. Browser'lar Global yerine Window'u getirdi.