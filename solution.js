'use strict';

function findNames(arr1, arr2) {
  let solutionArr = [];

  for (var i = 0; i < arr1.length; i++) {
    for (var k = 0; k < arr2.length; k++) {
      if (arr1[i] === arr2[k]) solutionArr.push(arr1[i]);
    }
  }

  return solutionArr; //['sue', 'kathy']
}

//lots of help on this one. It makes sense now, but I was struggling with execution (still)