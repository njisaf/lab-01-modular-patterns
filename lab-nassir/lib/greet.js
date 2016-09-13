'use strict';

const greeting = module.exports = function(name) {
  console.log('running');
  if (process.argv[2]) {
    console.log('Hello ' + process.argv[2]);
  } else if (!name) {
    throw new Error ('greet() expects an argument; should be a name');
  } else {
    return 'Hello ' + name;
  }
};

greeting();
