

function reverseString(str){

  if(str.length <2 || !str || typeof str !== 'string'){
    return "INVALID INPUT";
  }
  else{
    let arr = str.split("");

  let newArr = [];
  for(let i = 0; i < arr.length; i++)
  {
    newArr.unshift(arr[i]);
  }
  return newArr.join("");
  }
}


console.log(reverseString("Hello I am Oday"));