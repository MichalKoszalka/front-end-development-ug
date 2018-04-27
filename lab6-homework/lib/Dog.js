"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dog = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dog =
/*#__PURE__*/
function () {
  function Dog(name, breed, weight, height) {
    _classCallCheck(this, Dog);

    Object.defineProperty(this, "startWeight", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "exp", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "intelligence", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
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
      console.log("I am ".concat(this.name));
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

exports.Dog = Dog;