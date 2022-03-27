//Глобальные и локальные переменные
//Глобальные
var avatar;
var levelThreshold = 1000;
//Локальные
function getScore(points) {
    var score;
    var i = 0;
    while ( i < levelThreshold) {
        i = i + 1;
    }
    return score;
}
// Эти четыре переменные имеют глобальную область действия. 
// Они будут видны во всем коде, приведенном внизу
var avatar = "generic";
var skill = 1.0;
var pointsPerLevel = 1000;
var userPoints = 2008;