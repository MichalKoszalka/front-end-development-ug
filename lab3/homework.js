// Prosty moduł/interfejs dla swojej dziedziny

var lib = {};

lib.dogs = (function () {

    var allDogs = [];

    function Dog (name, breed, weight, height) {
        this.name = name;
        this.breed = breed;
        this.weight = weight;
        this.height = height;
        this.introduce = function () {
            console.log("I am " + name)
        }
    };
    function GuardDog(name, breed, weight, height) {
        Dog.call(this, name, breed, weight, height);
        this.guard = function () {
            console.log("guarding");
        }
    };
    GuardDog.prototype = Object.create(Dog.prototype);
    GuardDog.prototype.contructor = GuardDog;
    function HuntingDog(name, breed, weight, height) {
        Dog.call(this, name, breed, weight, height);
        this.hunt = function () {
            console.log("hunting");
        }
    };
    HuntingDog.prototype = Object.create(Dog.prototype);
    HuntingDog.prototype.contructor = HuntingDog;


    return {
        createDog: function (name, breed, weight, height) {
            return new Dog(name, breed, weight, height);
        },
        createGuardDog: function (name, breed, weight, height) {
            return new GuardDog(name, breed, weight, height);
        },
        createHuntingDog: function (name, breed, weight, height) {
            return new HuntingDog(name, breed, weight, height);
        },
        addDog: function (dog) {
            allDogs.push(dog);
        },
        removeDog: function (dog) {
            allDogs.splice(allDogs.indexOf(dog), 1);
        },
        findByBreed: function (breed) {
            return allDogs.filter(function (dog) {
                return dog.breed === breed;
            });
        },
        findAllBreed: function () {
            return allDogs.map(function (dog) {
                return dog.breed;
            });
        },
        allDogs: function () {
            return allDogs;
        }
    };


})();

console.log(lib.dogs.allDogs());

var alex = new lib.dogs.createDog("alex", "german sheepherd", 30, 60);
console.log(alex);

lib.dogs.addDog(alex);
lib.dogs.addDog(new lib.dogs.createDog("rex", "german sheepherd", 32, 65));
lib.dogs.addDog(new lib.dogs.createDog("rufus", "weimeraner", 35, 80));
lib.dogs.addDog(new lib.dogs.createDog("cleo", "border collie", 24, 70));
console.log(lib.dogs.allDogs());
console.log(lib.dogs.findAllBreed());


console.log(lib.dogs.findByBreed("german sheepherd"));

lib.dogs.removeDog(alex);
console.log(lib.dogs.findByBreed("german sheepherd"));
console.log(lib.dogs.allDogs());

var hector = new lib.dogs.createGuardDog("hector", "amstaf", 40, 50);
hector.guard();

var vector = new lib.dogs.createHuntingDog("vector", "visla", 40, 70);
vector.hunt();

