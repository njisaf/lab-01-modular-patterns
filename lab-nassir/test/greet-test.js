'use strict';

const greet = require('../lib/greet');
const assert = require('assert');

describe('Greet test', function(){
  describe('#greet()', function(){
    it('greet() should return \'Hello\' and a name; for purposes of testing, we will use \'Nassir\' as the argument.', function(){
      assert.equal(greet('Nassir'), 'Hello Nassir');
    });
  });
});
