"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Student = function Student(name, yob) {
  _classCallCheck(this, Student);

  this.name = name;
  this.yob = yob;
};

var zenek = new Student('Zenon', 2006);
console.log(zenek.name);

function sayHello(person) {
  console.log("Hello ".concat(person.name));
}

var ziutek = {
  name: 'Ziutek',
  yob: 2006
};
var myList = [ziutek, zenek];
var myTuple = ["Fiat", 1998];
console.log(myTuple[0]);
sayHello(ziutek);
sayHello(zenek);
var Color;

(function (Color) {
  Color[Color["Red"] = 0] = "Red";
  Color[Color["Greed"] = 1] = "Greed";
  Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));

;