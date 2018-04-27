"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DogController = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DogController =
/*#__PURE__*/
function () {
  function DogController() {
    _classCallCheck(this, DogController);

    Object.defineProperty(this, "allDogs", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: []
    });
  }

  _createClass(DogController, [{
    key: "addDog",
    value: function addDog(dog) {
      this.allDogs.push(dog);
    }
  }, {
    key: "removeDog",
    value: function removeDog(dog) {
      this.allDogs.splice(this.allDogs.indexOf(dog), 1);
    }
  }, {
    key: "findByBreed",
    value: function findByBreed(breed) {
      return this.allDogs.filter(function (dog) {
        return dog.breed === breed;
      });
    }
  }, {
    key: "findAllBreed",
    value: function findAllBreed() {
      return this.allDogs.map(function (dog) {
        return dog.breed;
      });
    }
  }, {
    key: "findHeavierThan",
    value: function findHeavierThan(weight) {
      return this.allDogs.filter(function (dog) {
        return dog.weight > weight;
      });
    }
  }, {
    key: "findTallerThan",
    value: function findTallerThan(height) {
      return this.allDogs.filter(function (dog) {
        return dog.height > height;
      });
    }
  }, {
    key: "findOverWeightDogs",
    value: function findOverWeightDogs() {
      return this.allDogs.filter(function (dog) {
        return dog.weight > 1.5 * dog.startWeight;
      });
    }
  }, {
    key: "trainAll",
    value: function trainAll() {
      return this.allDogs.forEach(function (dog) {
        return dog.train();
      });
    }
  }, {
    key: "findTrainedDogs",
    value: function findTrainedDogs() {
      return this.allDogs.filter(function (dog) {
        return dog.canDoTheTrick();
      });
    }
  }]);

  return DogController;
}();

exports.DogController = DogController;