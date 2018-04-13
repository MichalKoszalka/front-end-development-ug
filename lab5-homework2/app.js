var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var userSubscription;
var computerSubscription;
var interval = Rx.Observable.interval(100);
var keyups = Rx.Observable.fromEvent(document, 'keydown');

var userRectangle = {
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    color: "green",
    reset: function() {
        this.x=0;
        this.y=0;
    }
}

var computerRectangle = {
    x: 100,
    y: 100,
    width: 50,
    height: 50,
    color: "red",
    reset: function() {
        this.x=100;
        this.y=100;
    }
}

function clearRectangle(rectangle) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
}

function drawRectangle(rectangle) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.lineWidth = "50";
    ctx.fillStyle = rectangle.color;
    ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
}

function move(rectangle, x, y) {
    clearRectangle(rectangle);
    if (validate(rectangle, x, y)) {
        rectangle.x += x;
        rectangle.y += y;
    }
    if (rectanglesOverlap()) {
        console.log("game over");
        gameOver();
    }
    drawRectangle(rectangle);
}

function rectanglesOverlap() {
    return !(userRectangle.x > (computerRectangle.x + computerRectangle.width) ||
        (userRectangle.x + userRectangle.width) < computerRectangle.x ||
        userRectangle.y > (computerRectangle.y + computerRectangle.height) ||
        (userRectangle.y + userRectangle.height) < computerRectangle.y);
}

function isBetween(x, min, max) {
    return x >= max && x <= max;
}

function moveToDirection(rectangle, vector) {
    var x = 0;
    var y = 0;
    if (vector === 1) {
        x = 10;
    }
    if (vector === 2) {
        x = -10;
    }
    if (vector === 3) {
        y = 10;
    }
    if (vector === 4) {
        y = -10;
    }
    move(rectangle, x, y);
}

function validate(rectangle, x, y) {
    if (rectangle.x + x < 0 || rectangle.x + x > canvas.width - rectangle.width) {
        return false;
    }
    if (rectangle.y + y < 0 || rectangle.y + y > canvas.height - rectangle.height) {
        return false;
    }
    return true;
}

function resolveKey(key) {
    var direction = 0;
    if (key === 'ArrowRight') {
        direction = 1;
    }
    if (key === 'ArrowLeft') {
        direction = 2;
    }
    if (key === 'ArrowDown') {
        direction = 3;
    }
    if (key === 'ArrowUp') {
        direction = 4;
    }
    return direction;
}

function getDirection() {
    return Math.floor(Math.random() * 4) + 1
}

function gameOver() {
    computerSubscription.unsubscribe();
    userSubscription.unsubscribe();
    $('#startGameButton').css('visibility', 'visible');    
    $('#gameOverHeader').css('visibility', 'visible');    
}

function startGame() {
    $('#startGameButton').css('visibility', 'hidden');
    $('#gameOverHeader').css('visibility', 'hidden');
    clearRectangle(userRectangle);
    clearRectangle(computerRectangle);
    computerRectangle.reset();
    userRectangle.reset();
    computerSubscription = interval.subscribe(function (x) {
        moveToDirection(computerRectangle, getDirection());
    });
    userSubscription = keyups.subscribe(function (x) {
        moveToDirection(userRectangle, resolveKey(x.key));
    });
    drawRectangle(userRectangle);    
}



