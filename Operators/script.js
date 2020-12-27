var num1 = 7;
var num2 = 6;

console.log(num1 * num2);

var value;
if(num1 > num2){
    value = true;
}else{
    value = false;
}

console.log(value);

var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;

displayDiscountPercentage = Math.round(discountPercent);

console.log(`
    Without using math function: ${discountPercent}
    With using Math Function: ${displayDiscountPercentage}
`);

var result = listingPrice > sellingPrice;

console.log(result);

console.log(typeof result); //This prints the type of data it is holding
