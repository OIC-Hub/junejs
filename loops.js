// For loop

/* 
  for(var initialisation; condition; increment/decreament){
    code
  }
*/


// for(let i=0; i<10; i++){
//     console.log('Hello Javascript')
// }

// for(let i=1; i<=1000; i++){
//     console.log(i)
// }

//  let words=""
// for(let i=0; i<10; i++){
//    words +="No Cheating <br>"

// }
// let number=""
// for(let i=1; i<=100; i++){
//    if(i % 2 ==0){
//     number += `${i} is even number <br>`;
//    }else{
//     number += `${i} is odd number <br>`;
//    }

// }

// const nums =[]
//  for(let n = 0; n<12; n++){
//        if(n % 2 ==0){
//      nums[n]="Even number"
//    }else{
//     nums[n]="Odd number"
//    }
//  }

//  console.log(nums)
// document.getElementById('words').innerHTML= nums

let scores=[34, 56, 78, 90, 10];
let newScores=[];
for(let i=0; i < scores.length; i++){
    newScores[i]= scores[i] * 2
}
console.log(newScores)