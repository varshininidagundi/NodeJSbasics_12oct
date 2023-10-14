const double=()=>{
    let num1=2;
    const arr= [];
    const arr1 = [];
    const arr2 = [];
    for(i=1;i<=20;i++){
        console.log(num1);
        arr.push(num1);
        if(i%2 ==0){
            arr1.push(num1);
        }
        else{
            arr2.push(num1);
        }
        num1= num1 *2;
        }
    console.log(arr,arr1,arr2);
   
}
double()
//let person={}