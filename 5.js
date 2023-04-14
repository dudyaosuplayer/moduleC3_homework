class ElecApp {
  constructor(name, power, expirationDate, price){
    this.name = name;
    this.power = power;
    this.expirationDate = expirationDate;
    this.price = price;
    this.isPlugged = false;
  }
  
  plugIn() {
    console.log(`${this.name} is plugged in.`);
    this.isPlugged = true;
  }
  plugOff() {
    console.log(`${this.name} is plugged off.`);
    this.isPlugged = false;
  }
  info() {
    for (let prop in this) {
      if (this.hasOwnProperty(prop)) {
        console.log(`${prop} - ${this[prop]}`);
      }
    }
  }
  
  static elec() {
    console.log('electricity app');
  }
}

class Computer extends ElecApp {
  constructor(name, power, expirationDate, price, type, owner, noizeLvl) {
    super(name, power, expirationDate, price);
    this.type = type;
    this.owner = owner;
    this.noizeLvl = noizeLvl;
  }
  
  info() {
    for (let prop in this) {
      if (this.hasOwnProperty(prop)) {
      console.log(`Computer ${prop} - ${this[prop]}`);
      }
    }
  }
  
  static noize() {
      console.log("bzzzzzzzzzzzzz");
  } 
}

class Lamp extends ElecApp {
  constructor(name, power, expirationDate, price, type, color, isBordered) {
    super(name, power, expirationDate, price);
    this.type = type;
    this.color = color;
    this.isBordered = isBordered;
  }
  
  info() {
    for (let prop in this) {
        if (this.hasOwnProperty(prop)) {
        console.log(`Lamp ${prop} - ${this[prop]}`);
        }
    }
  }
  
  sound() {
    console.log('lullaby sound')
  }
  
}

const e = new ElecApp("e", 200, 2, 20000);
const pc = new Computer("Sasha`s PC", 200, 5, 150000, "PC", "Sasha", 10);
const lamp = new Lamp("Avrora", 20, 1, 2000, "night light", "green", false);
// console.log(lamp instanceof Lamp);
// console.log(lamp instanceof ElecApp)
// console.log(lamp instanceof Computer)
// lamp.sound()
// Lamp.sound()
// lamp.plugIn();
// lamp.info()

// console.log(lamp);
// lamp.plugOff();
// console.log(lamp);

// console.log(pc instanceof ElecApp);
// console.log(pc instanceof Computer);
// Computer.noize();
// pc.plugIn();
// pc.info();
// pc.plugOff();
// pc.info();
// ElecApp.elec();
// e.elec();
// e.info();
// e.plugIn();
// console.log(e);
// e.plugOff();
// console.log(e);





