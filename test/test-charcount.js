var expect  = require('chai').expect;
var charcount = require('../charcount');

it('Char Count Test', function(done) {
        var t = 'hello world';
        var a = t.replace(/[0-9\s]/g, "");
        expect(charcount.counter(t)).to.equal(a.length);
        done();
});
