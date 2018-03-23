// funkcja tworzy nowy obiekt który rozszerza przekazany obiekt "proto". Taka funkcja istnieje w klasie Object
function  create (proto) {
    function F() {}
    F.prototype = proto;
    F.prototype.sayHello = function () {
        return "Hello Wordl";
    };
    return new F();
}

var base = {
    x: 5,
    y: 7,
    getX: function () {
        return this.x;
    },
    getY: function () {
        return this.y;
    } 
};

var someExtension = create(base);

console.log(someExtension.getX());
console.log(someExtension.sayHello());