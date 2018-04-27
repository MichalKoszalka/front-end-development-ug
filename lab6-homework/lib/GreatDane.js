"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GreatDane = void 0;

var _Dog2 = require("./Dog");

var _Breed = require("./Breed");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GreatDane =
/*#__PURE__*/
function (_Dog) {
  _inherits(GreatDane, _Dog);

  function GreatDane(name) {
    var _this;

    var weight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 54;
    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 75;

    _classCallCheck(this, GreatDane);

    _this = _possibleConstructorReturn(this, (GreatDane.__proto__ || Object.getPrototypeOf(GreatDane)).call(this, name, _Breed.Breed.GreatDane, weight, height));
    _this.startWeight = weight;
    _this.exp = 0;
    _this.intelligence = 3;
    return _this;
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
}(_Dog2.Dog);

exports.GreatDane = GreatDane;