'use strict';

function mia(arr) {
  var maxNum = Math.max.apply(null, arr);
  var seq = [];
  var result = [];

  for(var i = 1; i <= maxNum; i++) {
    seq.push(i);
  }
  console.log(seq);

  for(var j = 0; j < seq.length; j++) {
    if(!arr.includes(seq[j])) {
      result.push(seq[j]);
    }
  }
  console.log(result);
  return result;
}

mia([1, 2, 4, 5]);