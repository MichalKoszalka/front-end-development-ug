"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GermanShepherd = void 0;

var _Dog2 = require("./Dog");

var _Breed = require("./Breed");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GermanShepherd =
/*#__PURE__*/
function (_Dog) {
  _inherits(GermanShepherd, _Dog);

  function GermanShepherd(name) {
    var _this;

    var weight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 60;

    _classCallCheck(this, GermanShepherd);

    _this = _possibleConstructorReturn(this, (GermanShepherd.__proto__ || Object.getPrototypeOf(GermanShepherd)).call(this, name, _Breed.Breed.GermanShepherd, weight, height));
    _this.startWeight = weight;
    _this.exp = 1;
    _this.intelligence = 5;
    return _this;
  }

  return GermanShepherd;
}(_Dog2.Dog);

exports.GermanShepherd = GermanShepherd;