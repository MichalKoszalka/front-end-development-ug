//problemy z "this" w JS
// 4 konteksty działania funkcji:
// 1. "Zwykła" funkcja
function z () {
    console.log(this.imie);
}
imie = "Ziutek";
z(); // działa w przestrzeni globalnej

//2. Kontekst konstruktora !!!
function Person(name) {
    this.name = name;
}
// konwencja nazewnicza zakłada używanie dużej litery tylko dla konstruktora
var ziutek = new Person("Ziutek"); // wywołanie funkcji w kontekście konstruktora, 
// tylko w przypadku użycia "new", "this" wiąże do obiektu, którego dotyczy, w innym przypadku do global/window
var heniek = Person("Heniek"); // zwyczajne wywołanie funkcji

var zenek = new z();

console.log(ziutek.name); //zadziała
// console.log(heniek.name); //nie zadziała
console.log(zenek.imie);

//3. Kontekst metody - this wiąże do obiektu którego jest częścią
var person = {
    imie: "Nieznane",
    sayHello: function() {
        return "Hello " + this.imie;
    }
}
imie = "Henio"; // nie pomogło -> imie jest w kontekście obiektu, a nie globalnym
console.log(person.sayHello());

//4. Kontekst apply/call (duck typing) this wiąże do obiektu przekazywanego w argumencie funkcji apply/call
function sayKwaKwa() {
    return console.log("Jestem kaczką bo mówię: " + this.kwakwa);
}

var kaczka = {
    kwakwa: "KWA! KWA!"
};

sayKwaKwa.apply(kaczka) // użyj funkcji "sayKwaKwa" w kontekście obiektu "kaczka"

var pies = {
    hauhau: "HAU! HAU!"
}
sayKwaKwa.apply(pies);

function dajGlos(zwierze) {
    return console.log("Jestem " + zwierze + " bo mówię: " + this.message);
}

var kaczka = {
    message: "KWA! KWA!"
};


var pies = {
    message: "HAU! HAU!"
}
dajGlos.apply(pies, ['pies']);
dajGlos.apply(kaczka, ['kaczka']);
