var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,

    //Запуск двигателя
    //в каком состоянии находится двигатель
    started: false,

    //Состояние запаса топлива
    fuel:0,

    //ЗАПУСК
    start: function() {
        if (this.fuel > 0) {
            this.started = true;
            alert("Engine start.")
        } else {
            alert("The car is on empty, fill up before starting!");
        }   
    },

    //ОСТАНОВКА
    stop: function() {
        this.started = false;
        alert("Engine stop.")
    },

    //
    drive: function() {
        if (this.started) {
            if (this.fuel > 0) {
                alert(this.make + " " + this.model + " goes zoom zoom!");
                this.fuel = this.fuel - 1;
            } else {
                alert("Uh oh, out of fuel.");
                this.stop
            }
        } else {
            alert("You need to start the engine first.");
        }
    },
    
    //Заправка машины, через метод
    addFuel: function(amount) {
        this.fuel = this.fuel + amount;
        alert("Fuel added:" + " " + amount);
    }
}
fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();