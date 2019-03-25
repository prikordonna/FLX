function assign (target) {
    if (target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }

    let newObject = Object(target);

    for (let index = 1; index < arguments.length; index++) {
        let nextArgument = arguments[index];

        if (nextArgument !== null) {
            for (let item in nextArgument) {
                if (Object.prototype.hasOwnProperty.call(nextArgument, item)) {
                    newObject[item] = nextArgument[item];
                }
            }
        }
    }
    return newObject;
}

//    <-------------- TASK 2  ------------->

function Bot (obj) {
    this.name = obj.name;
    this.speed = obj.speed;
    this.x = obj.x;
    this.y = obj.y;
    this.defaultSpeed = obj.speed;
    this.type = 'Bot';
}
Bot.prototype.getSpeed = function () {
    return this.speed;
}
Bot.prototype.setSpeed = function(newSpeed) {
    this.speed = newSpeed;
}
Bot.prototype.getDefaultSpeed = function () {
    return this.defaultSpeed;
}
Bot.prototype.setCoordinates = function (newX, newY) {
    this.x = newX;
    this.y = newY;
}
Bot.prototype.getCoordinates = function () {
    let coordinates = {};
    coordinates.x = this.x;
    coordinates.y = this.y;
    return coordinates; 
}
Bot.prototype.showPosition = function () {
    return `I am ${this.type} '${this.name}'. I am located at ${this.x}:${this.y}.`;
}
Bot.prototype.move = function (caseType) {
    if (caseType === 'up') {
        this.y += this.speed;
    } else if (caseType === 'down') {
        this.y -= this.speed;
    } else if ( caseType === 'right') {
        this.x += this.speed;
    } else if (caseType === 'left') {
        this.x -= this.speed;
    } else {
        console.log(`Use only "left" "right" "up" "down" `);
    }
}

// <-------Racebot --------->

let Racebot = function (obj) {
    Bot.call(this, obj);
    this.type = 'Racebot';
    this.previousMove;
}
Racebot.prototype = Object.create(Bot.prototype);
Racebot.prototype.constructor = Racebot;

Racebot.prototype.move = function (moveType) {
    if ( this.previousMove === moveType) {
        this.setSpeed(this.getSpeed() + 1);
        Bot.prototype.move.call(this, moveType);
        this.previousMove = moveType;
    } else {
        this.speed = this.defaultSpeed;
        Bot.prototype.move.call(this, moveType);
        this.previousMove = moveType;
    }
}

// <-------SpeedBot ------>

let Speedbot = function (obj) {
    Bot.call(this, obj);
    this.type = 'Speedbot';
}

Speedbot.prototype = Object.create(Bot.prototype);
Speedbot.prototype.constructor = Speedbot;
Speedbot.prototype.prepareEngine = function () {
    this.setSpeed(this.speed + 2);
}
Speedbot.prototype.move = function (move) {
    Bot.prototype.move.call(this, move);
    if ( this.speed > this.defaultSpeed) {
        this.setSpeed(this.speed - 1);
    } 
}




//Task 1
// var defaults = { a:123, b:777 };
// var options = { a:456 };
// var configs = assign({}, defaults, options); // {a: 456, b: 777}

// //Task 2
// let Botty = new Bot({name:"Betty", speed:2, x:0, y:1});
// Botty.showPosition(); // I am Bot 'Betty'. I am located at 0:1.
// Botty.move('up');
// Botty.showPosition(); // I am Bot 'Betty'. I am located at 0:3.
// Botty.move('left');
// Botty.move('down');
// Botty.move('up');
// Botty.move('up');
// Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:5.
// Botty.move('up');
// Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:7.
// Botty.move('up');
// Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:9.

// let Zoom = new Racebot({name:"Lightning", speed:2, x:0, y:1});
// Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at 0:1.
// Zoom.move('up');
// Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at 0:3.
// Zoom.move('left');
// Zoom.move('down');
// Zoom.move('up');
// Zoom.move('up');
// Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:6.
// Zoom.move('up');
// Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:10.
// Zoom.move('up');
// Zoom.showPosition(); // I am Racebot 'Lightning'. I am located at -2:15.

// let Broom = new Speedbot({name:"Thunder", speed:2, x:0, y:1});
// Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at 0:1.
// Broom.move('up');
// Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at 0:3.
// Broom.prepareEngine();
// Broom.move('left');
// Broom.move('down');
// Broom.move('up');
// Broom.move('up');
// Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:4.
// Broom.move('up');
// Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:6.
// Broom.move('up');
// Broom.showPosition(); // I am Speedbot 'Thunder'. I am located at -4:8.
