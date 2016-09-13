'use strict';

const greet = require('../lib/greet');
const assert = require('assert');

describe('Greet test', function(){
  describe('#greet()', function(){
    it('greet() should return \'Hello\' and a name; you can enter a name as a command line argument', function(){
      assert.equal(greet('Nassir'), 'Hello Nassir');
    });
    assert.throws(function(){
      greet();
    }, 'greet() expects an argument; should be a name.');
  });
});
