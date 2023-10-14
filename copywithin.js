arr1=["a","b","c","d","e"];
function copywithin(arr1){
    arr1=arr1.copyWithin(0,3);
    return arr1
}
const ar1=copywithin(arr1);
console.log(ar1);