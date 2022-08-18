//const repeatString = function(string, num) {
function repeatString(string, times){
    if (times < 0)
    return "ERROR";
let output = "";
    for (let i= 0; i < times ; i++){

output += string;
    }
    return output;
};
console.log (repeatString("bo",5))
// Do not edit below this line
module.exports = repeatString;
