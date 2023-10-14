const arr1=[0,9,5,6,2,7]
const fillfunction=(a1)=>{
    let array2=a1.fill(2,4,6);
    return array2;
}
array1=fillfunction(arr1);
console.log(array1)
//fills with 2 from 4th position  