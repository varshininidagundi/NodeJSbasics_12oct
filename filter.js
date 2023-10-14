const ages = [32, 33, 16, 40, 78, 6, 78, 9];
const result = ages.filter(checkAdult);
console.log(result)

const checkAdult=(age)=> {
  return age >= 18;
}
//advantages of fat arrow fun 