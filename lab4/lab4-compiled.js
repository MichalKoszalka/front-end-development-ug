"use strict";

//lambda
var doubles = [1, 2, 3].map(function (item) {
    return item * 2;
});

var evens = [1, 2, 3, 4, 5, 6].filter(function (v) {
    return v % 2 === 0;
});

// lambda jako predykat
var evenPredicate = function evenPredicate(v) {
    return v % 2 === 0;
};

var evens2 = [1, 2, 3, 4, 5, 6, 7, 8].filter(evenPredicate);

doubles.forEach(function (item) {
    return console.log(item);
});

evens.forEach(function (item) {
    return console.log(item);
});

evens2.forEach(function (item) {
    return console.log(item);
});

//wsparcie delty dla "this" 
//wewnątrz move() "this.scale" da nam NaN
var aShape = {
    numbers: [1, 2, 3, 4, 5],
    scale: 2,
    move: function move() {
        console.log(this.scale);
        this.numbers = this.numbers.map(function (element) {
            return element * this.scale; //zwróci NaN
        });
    }
};

aShape.move(5);
aShape.numbers.forEach(function (item) {
    return console.log(item);
});

//poprawka z uzyciem self
var aShape = {
    numbers: [1, 2, 3, 4, 5],
    scale: 2,
    move: function move() {
        console.log(this.scale);
        var self = this;
        this.numbers = this.numbers.map(function (element) {
            return element * self.scale; //OK
        });
    }
};

aShape.move(5);
aShape.numbers.forEach(function (item) {
    return console.log(item);
});

var aShape = {
    numbers: [1, 2, 3, 4, 5],
    scale: 2,
    move: function move() {
        var _this = this;

        console.log(this.scale);
        this.numbers = this.numbers.map(function (element) {
            return element * _this.scale;
        }); //zwróci NaN
    }
};

aShape.move(5);
aShape.numbers.forEach(function (item) {
    return console.log(item);
});
