/* Chapter 4 */
/*

Primitive and Reference Values
- ECMAScript'te değişkenler 2 tip data tutabilir: primitive ve reference. primitive value'lar stack'te duruyor. reference
ise direk heap'te duran bir pointer. Bir değişkene bir değer atandığında yorumlayıcı o değerin tipine bakar.

- Şunlar primitive: undefined, null, boolean, number, string. bunlara reference by value ile ulaşıyon. Ortak özellikleri,
bunların size'larının fixed olması.

- reference'ların sizeları fixed değil. onlarla bir iş yapmak istediğinde önce pointer'dan bakıo ve sonra okuo vs vs.
by reference tabii ki. değere direk ulaşamıyorsun! yani

Dynamic Properties
- When working with reference values, properties and methods may be added, changed, or deleted at any time.
var person = new Object();
person.name = "Hakan";
alert(person.name);

- Primitive values can’t have properties added to them even though attempting to do so won’t cause an error.
var name = "hakan";
name.age = 30;
alert(name.age); // undefined

<<< Only reference values can have properties defined dynamically for later usage. >>>

Copying Values
- When a primitive value is assigned from one variable to another, the value stored on the stack is created and copied
into the location for the new variable.

- When a reference value is assigned from one variable to another, the value stored on the stack is also copied into the
location for the new variable. The difference is that this value is actually a pointer to an object stored on the heap.

Argument Passing
- All function arguments in ECMAScript are passed by value!!! Yani sadece değeri gidiyor. o block'tan (func) çıkıldığında
değer değişmemiş oluo.

Determining Type
- typeof kullanımı. bir değişkenin primitive mi olduğunu anlamanın en kolay yolu.
var s = "erman";
alert(typeof s); // string

- instanceof kullanımı. All reference values, by definition, are instances of Object, so the instanceof operator always
returns true when used with a reference value and the Object constructor.

Execution Context and Scope
- In web browsers, the global context is said to be that of the window object. so all global variables and functions are
created as properties and methods on the window object.

- When an execution context has executed all of its code, it is destroyed.

- Each function has its own execution context. Whenever code execution flows into a function, the function’s context is
pushed onto a context stack. After the function has finished executing, the stack is popped, returning control to the
previously executing context. This facility controls execution flow throughout an ECMAScript program.

- Özetle iki tür execution context var: global ve local.

Scope
- try-catch'in catch'i ve with hariç

- C'den şu yönü farklı:
if (true) {
    var color = “blue”;
}
alert(color);	//”blue”
// for ve if için bu geçerli

- var ile tanımlarsan local oluyor. öbür türlü global!!!

Garbage Collection
- JavaScript is a garbage-collected language!

- As of 2008, IE, Firefox, Opera, Chrome, and Safari all use mark-and-sweep garbage collection (or variations thereof)
in their JavaScript implementations, though the timing of garbage collection differs.

- The most popular form of garbage collection for JavaScript is called mark-and-sweep. When a variable comes into context,
such as when a variable is declared inside a function, it is flagged as being in context. Variables that are in context,
logically, should never have their memory freed because they may be used as long as execution continues in that context.
When a variable goes out of context, it is also flagged as being out of context.

- A second, less-popular type of garbage collection is reference counting.

- The garbage collector runs periodically and can potentially be an expensive process if there is a large number of
variable allocations in memory, so the timing of the garbage-collection process is important.

Managing Memory
- endişelenmene gerek yok bu konuda.

- local variables context dışına çıktığı an serbest bırakılıo zaten.