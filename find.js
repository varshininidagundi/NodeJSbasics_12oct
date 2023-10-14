array = [10, 20, 30, 40, 50];
let result = array.find(fi);

function fi(element) {
    for(i=0;i<5;i++){
        return element > 20;
    }
}
console.log(result);
