//obiektowość
// np przy użyciu immediately executed function - hermetyzacja

var someObject = {};

console.log(someObject.toString());

//Shape
//Dziedziczenie prototypowe

function Shape (x, y) {
    this.x = x;
    this.y = y;
}

Shape.prototype = {
    getX : function () {
    return this.x;
    },

    getY: function () {
    return this.y;
    },
};

Shape.prototype.move = function (deltaX, deltaY) {
    this.x += deltaX;
    this.y += deltaY;    
};

Shape.message = function () {
    console.log("Hello from message");
};

var aShape = new Shape(2, 1);
// aShape.message(); niewidoczna w obiekcie dziedziczonym

Shape.prototype.message2 = function () {
    console.log("Hello from message");
};

aShape.message2(); // widoczna, ponieważ umieszczona w prototype

console.log(aShape.toString());

console.log(aShape.x);

function Circle (x, y, r) {
    Shape.call(this, x, y); // wywołanie konstruktora przez call zwiąże this z obiektem Circle
    this.r = r;
}

Circle.prototype = Object.create(Shape.prototype);  // Prototype Circle otrzymuje to co ma Shape w prototype
Circle.prototype.contructor = Circle; // do doczytania

Circle.prototype.area = function () {
    return Math.PI * this.r * this.r;
};


var aCircle = new Circle (20, 30, 2);

console.log(aCircle.area);
