const ftoc = function(x) {
let b = ((x-32)*(5/9))
let fa = Math.round(b*10)/10
return fa
};

const ctof = function(y) {
let a = (y*(9/5)+32)
let fb = Math.round(a*10)/10

return fb
};
console.log(ftoc(31))
console.log(ctof(3))
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
