const sumAll = function(a,b) {
		let newArray=[]
				 sum = 0;
				 let error = "ERROR"
let biggervalue= Math.max(a,b)
let smallervalue= Math.min(a,b)
if( (typeof a === "string")|| (typeof b === "string")){
	return error
}
else if (smallervalue < 0){
	return error
}
else if( (typeof a === "object")|| (typeof b === "object")){
return error}
	else if ((biggervalue >=0) && (smallervalue >=0)){
	for (let i = smallervalue; i <= biggervalue; i++){
	newArray.push(i)
		}
		console.log (newArray)
		for (let i = 0; i < newArray.length; i++) {
			sum += newArray[i];
		}return sum

	};	

}
console.log (sumAll(-5, 1))
// Do not edit below this line
module.exports = sumAll;
