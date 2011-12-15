/* Chapter 3 */

  /* ECMA-262 defines all of this information for JavaScript in the form of a pseudolanguage called ECMAScript
    (often pronounced as “ek-ma-script“)

    Syntax: C ve C++'a çok benzio.

    case-sensetive

    ilk karakter garf, _ veya $ olmalı

    camelCase

    // tel satır için

    statements: ; ile ayrılan her satır. ; required değil ama kullan tabii.

    Keyword'ler: break case catch continue default delete do
    else	new var finally	return void for	switch while function	this with if	throw
    in	try instanceof	typeof

    Reserved ler: abstract boolean byte char class const debugger double
    enum export extends final float goto implements import
    int interface long native package private protected public
    short static super synchronized throws transient volatile

    Variable: Loosely Type olurlar. Yani herhangi bir değeri alabilirler. Ama tabii değiştirmemeye dikkat et.
      var message;
      var message2 = "hi";
    var'la yaratınca scope'ları local oluyor. o block'ta geçiyor birtek.
    var demezsen global.

  */

  /*
    ---Data Types--- typeof ile variable'ın tipine bakabilirsin

    1- undefined: null ile aynı şey değil. bir değişken yaratıyorsun ama değer atamıyorsun.
            var var1;
            alert(typeof(var1)); // undefined

            alert(typeof(var2)); // undefined
            alert(var2); // error!!!
    2- boolean: true or false.
            1 ve 0 true ve false demek değil.
    3- string:
        " ile ' arasında PHP'de old. gibi herhangi bir fark yok!..
        toString()
            age.toString();
            age.toString(3); // 3 tabanında yazar
        Eğer değişkenin null ve undefined olmasından şüpheleniyorsan String'i kullan:
            var value = null;
            alert(String(value)); // null

    4- number: int, float... octal, hexadecimal...
        Tabii sonsuz büyüklükteki bir sayıyı da yazamıosun. bunun için Number.MAX_VALUE ve Number.MIN_VALUE ile browser
        daki değer bakabilirsin. veya Nan var: not a number. mesela:
        isnan(19) gibi.

        3 tane function var number'a çevirmek için: Number(), parseFloat() ve parseInt()
        var num1 = Number(“Hello world!”); // NaN
        var num1 = Number(“”); // 0
        var num1 = Number(“000011”); // 11
        var num1 = parseInt(“1234blue”); // 1234
        var num3 = parseInt(“0xA”); var num4 = parseInt(22.5); // 22 - hexadecimal
        var num4 = parseFloat(“22.34.5”); // 22.34
        var num4 = parseFloat(“0908.5”); // 908.5
    5- object: object or null
        new ile yaratırsın.
        var value = new Object(); // ()'leri koy

        hasOwnProperty(propertyName)
        isPrototypeOf(object)
        propertyIsEnumerable(propertyName)
        valueOf()

        İleride değer atayacağın bir değişkene null atamak mantıklı. "acaba atadım mı" sorusunun cebanı oluyor çünkü
    6- function:

    NULL: emptye object pointer!

    var car = null;
    alert(typeof(car)); // object

  */

  /* Operators
      unary: ++, --, +, -
      bitwise: geç
      binary: !, &&, ||
      multiplicative: *, /, %, +, -,
        var message = “The sum of 5 and 10 is “ + (num1 + num2); // ”The sum of 5 and 10 is 15”
      relational: <, >, ==, !=
      assignment: =
      comma: ,
  */

  /* Statements
      if
      do while
      for
      for in
            for (var propName in window) {
                document.write(propName);
            }
      break continue
      with
            var qs = location.search.substring(1);
            var hostName = location.hostname;
            var url = location.href;

            with(location) {
                var qs = search.substring(1);
                var hostName = hostname;
                var url = href;
            }
      switch
  */

  /* Functions
      function functionName (arg, arg1) {
        alert("hi");
      }

      An ECMAScript function does not care how many arguments are passed in, nor does it care about the data types of
      those arguments.

      Functions that don’t specify a return value actually return the special value undefined.

      alert(arguments.length); ile görebilirsin kac arg gelmiş

      arguments objesi önemli!!! ( arguments[0] gibi )

      overloading yok, direk overwrite eder:
      function addSomeNumber(num) {
        return num + 100;
      }

      function addSomeNumber(num) {
        return num + 200;
      }

      var result = addSomeNumber(100); // 300
