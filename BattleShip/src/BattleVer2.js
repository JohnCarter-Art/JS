//Объявление перменных НАЧАЛО
//Задание локации для коробля
var location1 = randomLoc;
var randomLoc = Math.floor(Math.random() * 5);
var location2 = location1+1;
var location3 = location2+1;
//Попытка
var guess;
//Попадание
var hits = 0;
//Количестов попыток
var guesses = 0;
//Иноформация о состоянии коробля
var isSunk = false;
//Объявление перменных КОНЕЦ

//Цикл пока корабль не будет потоплен
while (isSunk == false) {
//Ввод координат и проверка на вход значения в диапазон
    guess = prompt("Ready, aim fire! (enter a number 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    }
//Изменение кол-ва попыток
    else {
        guesses = guesses + 1;
//Проверка попадания
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!");
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        }
        else {alert("MISS");}   
    }
}
//Сводная информация
var stats = "You took " + guesses + " guesses to sink the battleship, " + 
"which means your shooting accuracy was " + (3/guesses);
alert(stats);