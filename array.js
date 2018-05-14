//Declare initial array
var arr1 = [10,8,12,36];

//FP function that doubles array
var doubles = arr1.map(function (x){
   return x * 2;
})

console.log(doubles);

//FP function that filters array
var filterArray = doubles.filter(function (x){
    return x > 20;
})

console.log(filterArray);

//FP function that reduces array
var tottal = filterArray.reduce(function (sum, value){
  return sum + value;
})

console.log(tottal);