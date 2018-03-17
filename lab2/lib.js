//wzorzec moduł - sposób w jaki np. są exportowane biblioteki w JS
//domknięcia, funkcje i obiekty zastępują klasy

var lib = {};

lib.module = (function () {
    
    // zmienne prywatne
    var c = 0;
    var priv2 = "Hello";

    // wystawiony obiekt
    return {
        // 2 metody + 1 pole
        message: priv2 + "World",
        counter: function() {
            return ++c;
        },
        sayHello: function(name) {
            return "Hello " + name;
        }
    };

})();

// druga wersja z obiektem nieanonimowym
lib.module = (function () {
    
    // zmienne prywatne
    var c = 0;
    var priv2 = "Hello";

    // wystawiony obiekt
    var myInterface = {
        // 2 metody + 1 pole
        message: priv2 + "World",
        counter: function() {
            return ++c;
        },
        sayHello: function(name) {
            return "Hello " + name;
        }
    };
    return myInterface;
})();

console.log(lib.module.sayHello("Ziutek"));
console.log(lib.module.counter());
