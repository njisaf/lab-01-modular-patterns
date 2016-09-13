'use strict';

const greet = require('../lib/greet');
const assert = require('assert');

describe('Greet test', function(){
  describe('#greet()', function(){
    it('greet() should return \'Hello\' plus an argument. Nassir is the test argument. Expected output: \'Hello Nassir\'', function(){
      assert.equal(greet('Nassir'), 'Hello Nassir');
    });
    it('greet() should return \'Hello\' plus a command line input. Nassir is the test input. Expected output: \'Hello Nassir\'', function(){
      var process = {};
      process.argv = ['Empty', 'Empty', 'Nassir'];
      assert.equal(greet(process.argv[2]), 'Hello ' + process.argv[2]);
    });
    it('greet() must have an argument. If it does not, it will throw an error.', function(){
      assert.throws(function(){
        greet();
      }, 'greet() expects an argument; should be a name.');
    });
  });
});
