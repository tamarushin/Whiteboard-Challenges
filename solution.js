'use strict';

function create (arr){
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);
  let avg = arr.reduce((acc, cur) => {
    return cur += acc;
  })/arr.length;

return {
    max: max,
    min: min,
    avg: avg
  };
}

create ([1, 3, 5, 12, 8]);