'use strict';

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15];
let missNum;

let find = function (arr1) {
  for (let i = 0; i < arr1.length; i++) {
    if (i !== arr1[i + 1]) {
      
      missNum = i + 1;

    }
  }

  console.log(missNum);
  return missNum;
};

find(arr1);
