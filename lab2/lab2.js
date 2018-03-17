// literały
var person = {
    'imie': 'Jan',
    nazwisko: 'Kowalski',
    rokUr: 1893
};

console.log(person.imie);
person.miasto = "Gdańsk";
console.log(person.miasto);
console.log(person['miasto']);

// tablice
var somerArray = [1, 2, "trzy"];
somerArray.push(5);
somerArray.miasto = "Gdańsk";

// typy
console.log(typeof somerArray); //object
console.log(typeof new Array()); //object
console.log(typeof new Number()); //object
console.log(typeof new Boolean()); //object
console.log(typeof 1); //number
console.log(typeof true); //boolean
console.log(typeof 'string'); //string
console.log(typeof null); //object
console.log(typeof NaN); //number
console.log(somerArray.miasto);
console.log(somerArray);

// funkcje

//jako zmienna, funkcja anonimowa
var add = function (a, b) {
   return a + b;
};
console.log(add(2, 3)); //5
console.log(add(2, 3, 3)); //5
console.log(add()); //NaN
console.log(add(2, '3')); //23

// deklaracja vs przypisanie (sredniki)

var add = function (a, b) {
    return a + b;
 };

// deklaracja funkcji - wywołanie może być wcześniej
// deklaracje funkcji i zmiennych są wynoszone na górę pliku - javascript hoisting

console.log(multiply(3, 4))

 function multiply(a,b) {
     return a * b;
 };

 console.log(typeof add);
 console.log(typeof multiply);

 // funkcja jako argument innej funkcji
 // funkcje przyjmujące inne funkcje jako argumenty - high order function
 var higherOrderFunction =  function(a, b) {
     return a() + b
 };

 var lowerOrderFunction =  function() {
    return 4;
};

 console.log(higherOrderFunction(lowerOrderFunction,4));

// funkcja jako wartość zwracana funkcji
var someFun = function () {
     
    return function () {

     };
};

// sposób na ukrywanie implementacji, zmienna "prywatna"
// domknięcie - closure, wenątrz funkcji zwracanej mamy dostęp do pól funkcji zewnętrznej counter;
var counter = function () {
     var i = 0;
    return function () {
        return ++i;
     };
};

var c = counter();

c();
c();
c();

console.log(typeof c);
console.log(c());

var d = counter();

d();
d();
console.log(d());

//immediately executed function // IEF
var counter = function () {
    var i = 0;
   return function () {
       return ++i;
    };
}();

counter();
counter();
console.log(counter());

//scope - i bez var = global scope
var counter = function () {
    i = 0;
   return function () {
       return ++i;
    };
};
var c = counter();
var d = counter();

c();
c();
d();
console.log(c());
console.log(d());

// nie będzie błędu że nie znalazł "z" w kodzie, tylko w momencie uruchomienia
// ponieważ "z" może pochodzić z jakiegoś globalnego, zewnętrznego kontekstu
// function a() {
//     return z;
// }
console.log(a())
// scope funkcyjny
var counter = function () {
    var i = 0;
   function incr () {
       return i = i + 1;
    };

    return function() {
        return incr;
    }
};
