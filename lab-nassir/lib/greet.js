'use strict';

module.exports = function greet(name) {
  console.log('arguments', arguments);
  if (!name) throw new Error ('greet() expects an argument; should be a name');
  return 'Hello ' + name;
};
