//Массив данных с результатами образцов
var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

//Массив данных по затратам на получение образца
var costs = [.25, .27, .25, .25, .25, .25,
             .33, .31, .25, .29, .27, .22,
             .31, .25, .25, .33, .21, .25,
             .25, .25, .28, .25, .24, .22,
             .20, .25, .30, .25, .24, .25,
             .25, .25, .27, .25, .26, .29];

//Построчный вывод значений из общего массива данных и 
//получение максимального лучшего значения
function printAndGetHighScore(scores) {
    //Присваиваем перменной (наибольшее значение) значение 0 
    //для будущего присваивания ей наибольшего числа 
    var highScore = 0;
    //Переменная для вывода сообщения
    var output;
    //Цикл с построчным выводом каждого значения соответствующим номером
    for (var i = 0; i < scores.length; i++) {
        //(Присвоение) № и соответствующего значения
        output = "Bubble solution #" + i + " score: " + scores[i];
        ////(Вывод) № и соответствующего значения
        console.log(output);
        //Если значение больше максимального, 
        if (scores[i] > highScore) {
            //То присвоение максимальному новое соотв. значение
            highScore = scores[i];
        }
    }
    return highScore;
}

//Получение наилучших результатов и вывод их номеров
function getBestResults(scores, highScore) {
    //Создание массива номеров с лучшими результирующими
    var bestSolutions = [];
    //Цикл на определение номеров с лучшими результатами
    for (var i = 0; i < scores.length; i++) {
        //Если значение с определенным номером равно наилучшему значению
        if (scores[i] == highScore) {
            //То занесение в массив номера лучшего значения
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}

//Присвоение наибольшему значению полученного значния при использовании функции
var highScore = printAndGetHighScore(scores);
//Вывод наибольшего значения полученного в функции "printAndGetHighScore"
console.log("Highest bubble score: " + highScore);

//Вывод количества тестов
console.log("Bubbles tests: " + scores.length);

//Присвоение полученного массива переменной из фукции "getBestResults"
var bestSolutions = getBestResults(scores, highScore);
//Вывод значений из массива лучших номеров
console.log("Solutions with the highest score: " + bestSolutions);

//Наиболее эффективный образец в соответствии с его затратами 
function getMostCostEffectiveSolution(scores, costs, highScore) {
    //Присвоение затратам максимально возможного 
    //для того что бы в будущем вприсвоить минимально возможные
    var cost = 100;
    var index;
    //Перебор массива
    for (var i = 0; i < scores.length; i++) {
        //Если результат с определенным номером (индексом) максимален
        if (scores[i] == highScore) {
            //Если цена больше значения в массиве соотв. индексу
            if (cost > costs[i]) {
                //то индексу присваивается номер этого образца
                index = i;
                //а цена становится равной цене этого номера
                cost = costs[i];
            }
        }
    }
    return index;
}
var MostCostEffectiveSolution = getMostCostEffectiveSolution(scores, costs, highScore);
//Вывод номера наиболее эффективного образца
console.log("Bubble Solution #" + MostCostEffectiveSolution + " is the most cost effective");