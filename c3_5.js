class electric {
    constructor(power, name){
        this.name = name;
        this.power = power;
        this.isPlugged = true;
    }


    power_on() {
        console.log(`${this.name} включен в сеть`);
        this.isPlugged = true;
    }


    power_off() {
        console.log(`${this.name} выключен из сети`);
        this.isPlugged = false;
    }
}

class Lamp extends electric{
    constructor(name, power, brand){
        this.name = name;
        this.power = power;
        this.brand = brand;
        }
}

class Comp extends electric{
    constructor(name, power,type){
        this.name = name;
        this.power = power;
        this.type = type;
    }
}



let new_lamp = new Lamp("Бра", 60, "Samsung");
let new_comp = new Comp("MacBook", 90, "Ноутбук");

new_lamp.power_off();
new_comp.power_on();
console.log(new_lamp)
console.log(new_comp)