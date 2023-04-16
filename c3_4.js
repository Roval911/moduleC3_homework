function electric(power, name) {
    this.name = name;
    this.power = power;
    this.isPlugged = true;
}

electric.prototype.power_on = function() {
        console.log(`${this.name} включен в сеть`);
        this.isPlugged = true;
    }


electric.prototype.power_off = function() {
        console.log(`${this.name} выключен из сети`);
        this.isPlugged = false;
    }


function Lamp(name, power, brand){
    this.name = name;
    this.power = power;
    this.brand = brand;
}

function Comp(name, power,type){
    this.name = name;
    this.power = power;
    this.type = type;
}

Lamp.prototype = new electric();
Comp.prototype = new electric();


let new_lamp = new Lamp("Бра", 60, "Samsung");
let new_comp = new Comp("MacBook", 90, "Ноутбук");

new_lamp.power_off();
new_comp.power_on();
console.log(new_lamp)
console.log(new_comp)