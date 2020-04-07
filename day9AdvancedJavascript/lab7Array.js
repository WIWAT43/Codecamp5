/*  1.ผลลัพธ์ของความยาว Array คืออะไร */

let fruits = ["Apples","pear","Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
console.log (fruits.length);  /* คำตอบ 4 */

/* 2.       */

let styles = ["Jazz","Blues"];

styles.push("Rock-n-Roll");

styles.splice(styles.length/2,1,"Classics");

let x = styles.shift();

styles.unshift("Rap","Reggae");

/* 3. เขียนฟังก์ชั่น SumInput() */

function SumInput(){
    let numberInput = 0;
    let i = 1;
    let sumAr = 0;
    let arr = [];
  while ( !isNaN(numberInput) ){
      
    numberInput = +(prompt("Please Input numer"));
    if (!isNaN(numberInput)) {
        arr[i] = numberInput;
        sumAr += arr[i];
    i++;
    }
}
  alert(sumAr);
  return sumAr;
  
}
/* 4. Maximal Contiguous subarray ให้เขียนฟังก์ชั่น getMaxSubSum(arr) ที่ Return ผลรวมของ Subarray ที่มากที่สุดติดกัน */


let arr2 =[2,-1,2,3,-9];
let max = -500;
let mmax = -500;
let sum = 0;

function getMaxSubSum(arr){

    for (let i = 0; i< arr.length; i++){
        sum = 0;
        max = 0;
        for (let j = i; j < arr.length; j++){
            sum += arr[j];
            if (sum > max)
                max = sum;

             }
    if (max > mmax)
    mmax = max;
    }
    
return (mmax);
}

getMaxSubSum(arr2);