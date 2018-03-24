//lambda
var doubles = [1, 2, 3].map(item => item * 2);

var evens =  [1, 2, 3, 4, 5, 6].filter(v => v % 2 ===0);

// lambda jako predykat
var evenPredicate =  v => v % 2 ===0;

var evens2 =  [1, 2, 3, 4, 5, 6, 7, 8].filter(evenPredicate);

doubles.forEach(item => console.log(item));

evens.forEach(item => console.log(item));

evens2.forEach(item => console.log(item));

//wsparcie delty dla "this" 
//wewnątrz move() "this.scale" da nam NaN
var aShape = {
    numbers: [1, 2, 3, 4, 5],
    scale: 2,
    move() {
        console.log(this.scale);
        this.numbers = this.numbers.map(function(element) {
            return element * this.scale; //zwróci NaN
        });
    }
};

aShape.move(5);
aShape.numbers.forEach(item => console.log(item));


//poprawka z uzyciem self
var aShape = {
    numbers: [1, 2, 3, 4, 5],
    scale: 2,
    move() {
        console.log(this.scale);
        var self = this;
        this.numbers = this.numbers.map(function(element) {
            return element * self.scale; //OK
        });
    }
};

aShape.move(5);
aShape.numbers.forEach(item => console.log(item));

var aShape = {
    numbers: [1, 2, 3, 4, 5],
    scale: 2,
    move() {
        console.log(this.scale);
        this.numbers = this.numbers.map(element => element * this.scale); //zwróci NaN
    }
};

aShape.move(5);
aShape.numbers.forEach(item => console.log(item));
