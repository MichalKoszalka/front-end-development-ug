"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dog = function () {
    function Dog(name, breed, weight, height) {
        _classCallCheck(this, Dog);

        this.name = name;
        this.breed = breed;
        this.weight = weight;
        this.startWeight = weight;
        this.height = height;
        this.exp = 0;
        this.intelligence = 1;
    }

    _createClass(Dog, [{
        key: "introduce",
        value: function introduce() {
            console.log("I am " + this.name);
        }
    }, {
        key: "bark",
        value: function bark() {
            console.log("wow wow");
        }
    }, {
        key: "feed",
        value: function feed() {
            console.log("yummy");
            this.weight++;
        }
    }, {
        key: "canRun",
        value: function canRun() {
            return this.weight < 2 * this.startWeight;
        }
    }, {
        key: "run",
        value: function run() {
            if (this.weight >= 2 * this.startWeight) {
                this.bark();
            } else {
                console.log("running");
                if (this.weight > this.startWeight) {
                    this.weight--;
                }
            }
        }
    }, {
        key: "walk",
        value: function walk() {
            console.log("walking");
            if (this.weight > this.startWeight) {
                this.weight--;
            }
        }
    }, {
        key: "train",
        value: function train() {
            this.exp = this.exp + 1 * this.intelligence;
        }
    }, {
        key: "sit",
        value: function sit() {
            if (this.exp > 0) {
                console.log("siting");
            } else {
                this.bark();
            }
        }
    }, {
        key: "canDoTheTrick",
        value: function canDoTheTrick() {
            return this.exp > 5;
        }
    }, {
        key: "doTheTrick",
        value: function doTheTrick() {
            if (this.exp > 5) {
                console.log("doing trick");
            } else {
                this.bark();
            }
        }
    }]);

    return Dog;
}();

var Greyhound = function (_Dog) {
    _inherits(Greyhound, _Dog);

    function Greyhound(name) {
        var weight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 35;
        var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 70;

        _classCallCheck(this, Greyhound);

        var _this = _possibleConstructorReturn(this, (Greyhound.__proto__ || Object.getPrototypeOf(Greyhound)).call(this));

        _this.name = name;
        _this.breed = "Greyhound";
        _this.weight = weight;
        _this.startWeight = weight;
        _this.height = height;
        _this.exp = 0;
        _this.intelligence = 3;
        return _this;
    }

    return Greyhound;
}(Dog);

var GreatDane = function (_Dog2) {
    _inherits(GreatDane, _Dog2);

    function GreatDane(name) {
        var weight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 54;
        var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 75;

        _classCallCheck(this, GreatDane);

        var _this2 = _possibleConstructorReturn(this, (GreatDane.__proto__ || Object.getPrototypeOf(GreatDane)).call(this));

        _this2.name = name;
        _this2.breed = "Great dane";
        _this2.weight = weight;
        _this2.startWeight = weight;
        _this2.height = height;
        _this2.exp = 0;
        _this2.intelligence = 3;
        return _this2;
    }

    _createClass(GreatDane, [{
        key: "canRun",
        value: function canRun() {
            return this.weight < 1.5 * this.startWeight;
        }
    }, {
        key: "run",
        value: function run() {
            if (this.weight >= 1.5 * this.startWeight) {
                this.bark();
            } else {
                console.log("running");
                if (this.weight > this.startWeight) {
                    this.weight--;
                }
            }
        }
    }]);

    return GreatDane;
}(Dog);

var GermanShepherd = function (_Dog3) {
    _inherits(GermanShepherd, _Dog3);

    function GermanShepherd(name) {
        var weight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
        var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 60;

        _classCallCheck(this, GermanShepherd);

        var _this3 = _possibleConstructorReturn(this, (GermanShepherd.__proto__ || Object.getPrototypeOf(GermanShepherd)).call(this));

        _this3.name = name;
        _this3.breed = "German shepherd";
        _this3.weight = weight;
        _this3.startWeight = weight;
        _this3.height = height;
        _this3.exp = 1;
        _this3.intelligence = 5;
        return _this3;
    }

    return GermanShepherd;
}(Dog);

var DogController = function () {
    function DogController() {
        _classCallCheck(this, DogController);

        this._allDogs = [];
    }

    _createClass(DogController, [{
        key: "addDog",
        value: function addDog(dog) {
            this._allDogs.push(dog);
        }
    }, {
        key: "removeDog",
        value: function removeDog(dog) {
            this._allDogs.splice(this._allDogs.indexOf(dog), 1);
        }
    }, {
        key: "findByBreed",
        value: function findByBreed(breed) {
            return this._allDogs.filter(function (dog) {
                return dog.breed === breed;
            });
        }
    }, {
        key: "findAllBreed",
        value: function findAllBreed() {
            return this._allDogs.map(function (dog) {
                return dog.breed;
            });
        }
    }, {
        key: "findHeavierThan",
        value: function findHeavierThan(weight) {
            return this._allDogs.filter(function (dog) {
                return dog.weight > weight;
            });
        }
    }, {
        key: "findTallerThan",
        value: function findTallerThan(height) {
            return this._allDogs.filter(function (dog) {
                return dog.height > height;
            });
        }
    }, {
        key: "findOverWeightDogs",
        value: function findOverWeightDogs() {
            return this._allDogs.filter(function (dog) {
                return dog.weight > 1.5 * dog.startWeight;
            });
        }
    }, {
        key: "trainAll",
        value: function trainAll() {
            return this._allDogs.forEach(function (dog) {
                return dog.train();
            });
        }
    }, {
        key: "findTrainedDogs",
        value: function findTrainedDogs() {
            return this._allDogs.filter(function (dog) {
                return dog.canDoTheTrick();
            });
        }
    }, {
        key: "allDogs",
        set: function set(allDogs) {
            this._allDogs = allDogs;
        },
        get: function get() {
            return this._allDogs;
        }
    }]);

    return DogController;
}();

var rex = new GermanShepherd("rex");
var hector = new GreatDane("hector");
var mimi = new Greyhound("mimi");

rex.introduce();
rex.bark();
rex.canRun();
rex.run();
rex.walk();
rex.sit();
rex.canDoTheTrick();
rex.doTheTrick();
rex.train();
rex.train();
rex.train();
rex.sit();
rex.doTheTrick();
for (i = 0; i < 45; i++) {
    rex.feed();
}
rex.run();
for (i = 0; i < 25; i++) {
    rex.walk();
}
rex.run();

hector.introduce();
hector.bark();
hector.canRun();
hector.run();
hector.walk();
hector.sit();
hector.canDoTheTrick();
hector.doTheTrick();
hector.train();
hector.train();
hector.train();
hector.sit();
hector.doTheTrick();

mimi.introduce();
mimi.bark();
mimi.canRun();
mimi.run();
mimi.walk();
mimi.sit();
mimi.canDoTheTrick();
mimi.doTheTrick();
mimi.train();
mimi.train();
mimi.train();
mimi.sit();
mimi.doTheTrick();

var dogController = new DogController();

dogController.addDog(rex);
dogController.addDog(hector);
dogController.addDog(mimi);

console.log(dogController.findAllBreed());
console.log(dogController.findByBreed(mimi.breed));
console.log(dogController.findTrainedDogs());
console.log(dogController.findOverWeightDogs());
