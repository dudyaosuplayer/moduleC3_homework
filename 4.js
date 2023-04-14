
function ElecApp(name, power, expirationDate, price) {
    this.name = name,
    this.power = power,
    this.expirationDate = expirationDate,
    this.price = price,
    this.isPlugged = false;
}

ElecApp.prototype.plugIn = function () {
  console.log(`${this.name} is plugged in.`);
  this.isPlugged = true;
};

ElecApp.prototype.plugOff = function () {
  console.log(`${this.name} is plugged off.`);
  this.isPlugged = false;
};

ElecApp.prototype.info = function () {
  for (let prop in this) {
    if (this.hasOwnProperty(prop)) {
      console.log(`${prop} - ${this[prop]}`);
    }
  }
};

function Computer(name, power, expirationDate, price, type, owner, noizeLvl) {
    this.name = name,
    this.power = power,
    this.expirationDate = expirationDate,
    this.price = price,
    this.isPlugged = false,
    this.type = type,
    this.owner = owner,
    this.noizeLvl = noizeLvl;
}

Computer.prototype = new ElecApp();

// Computer.prototype.plugIn = function () {
//   console.log(`${this.name} is plugged in.`);
//   this.isPlugged = true;
// };

// Computer.prototype.plugOff = function () {
//   console.log(`${this.name} is plugged off.`);
//   this.isPlugged = false;
// };

Computer.prototype.info = function () {
  for (let prop in this) {
    if (this.hasOwnProperty(prop)) {
      console.log(`Computer ${prop} - ${this[prop]}`);
    }
  }
};

Computer.prototype.noize = function () {
  console.log("bzzzzzzzzzzzzz");
};

function Lamp(name, power, expirationDate, price, type, color, isBordered) {
    this.name = name,
    this.power = power,
    this.expirationDate = expirationDate,
    this.price = price,
    this.isPlugged = false,
    this.type = type,
    this.color = color,
    this.isBordered = isBordered;
}

Lamp.prototype = new ElecApp();

// Lamp.prototype.plugIn = function () {
//   console.log(`Lamp ${this.name} is plugged in.`);
//   this.isPlugged = true;
// };

// Lamp.prototype.plugOff = function () {
//   console.log(`Lamp ${this.name} is plugged off.`);
//   this.isPlugged = false;
// };

Lamp.prototype.info = function () {
  for (let prop in this) {
    if (this.hasOwnProperty(prop)) {
      console.log(`Lamp ${prop} - ${this[prop]}`);
    }
  }
};

Lamp.prototype.itsLamp = function () {
  console.log(`It\` lamp!`);
};

const e = new ElecApp("e", 200, 2, 20000);

const lamp = new Lamp("Avrora", 20, 1, 2000, "night light", "green", false);

const pc = new Computer("Sasha`s PC", 200, 5, 150000, "PC", "Sasha", 10);
// lamp.plugIn();
// console.log(Object.getPrototypeOf(ElecApp));
// console.log(pc instanceof ElecApp);
// pc.plugIn();
// // pc.noize();
// pc.info();
// pc.plugOff();
// pc.info()
// // e.noize();
// // pc.itsLamp();
// // e.itsLamp();
