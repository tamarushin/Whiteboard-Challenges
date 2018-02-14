'use strict';

//this is a recursive function which means it will run like a loop but without giving it a .length- it will complete once it is finished.
var count = 0;  //start at 0

const traverse = (engine) => { //traverse the cars inc. the engine. 
  count += engine.value; //add value to the count
  if (engine.next) { //if there is another car
    traverse (engine.next); //call the function again
  } else {;//if there are no more cars
    return count;//return total count
  };
};