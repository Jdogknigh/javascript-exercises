const leapYears = function(x) {
if (((x % 100=== 0) && (x%400 === 0 )))
return true
else if 
(((!(x % 100=== 0)) && (!(x%400 === 0 ))) && ((x % 4 === 0)))
    {return true
 }
else if (x)
return false 
};
console.log(leapYears(700))
// Do not edit below this line
module.exports = leapYears;
