// Prosty moduł/interfejs dla swojej dziedziny

var lib = {};

lib.dogs = (function () {

   var allDogs = [];

    return {
        Dog: function (name, breed, weight, height) {
            this.name = name;
            this.breed = breed;
            this.weight = weight;
            this.height = height;
        },
        addDog: function(dog) {
            allDogs.push(dog);
        },
        removeDog: function(dog) {
            allDogs.splice(allDogs.indexOf(dog), 1);
        },
        findByBreed: function(breed) {
            return allDogs.filter(function(dog){
                return dog.breed === breed;
            });
        },
        findAllBreed: function() {
            return allDogs.map(function(dog) {
                return dog.breed;
            });
        },      
        allDogs: function() {
            return allDogs;
        }
    };


})();

console.log(lib.dogs.allDogs());

var alex = new lib.dogs.Dog("alex", "german sheepherd", 30, 60);
console.log(alex);

lib.dogs.addDog(alex);
lib.dogs.addDog(new lib.dogs.Dog("rex", "german sheepherd", 32, 65));
lib.dogs.addDog(new lib.dogs.Dog("rufus", "weimeraner", 35, 80));
lib.dogs.addDog(new lib.dogs.Dog("cleo", "border collie", 24, 70));
console.log(lib.dogs.allDogs());
console.log(lib.dogs.findAllBreed());


console.log(lib.dogs.findByBreed("german sheepherd"));

lib.dogs.removeDog(alex);
console.log(lib.dogs.findByBreed("german sheepherd"));
console.log(lib.dogs.allDogs());


