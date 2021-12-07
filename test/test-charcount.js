var expect = require('chai').expect;
var charcount = require('../charcount');
var request = require('chai').request;

it('Char Count Test', function(done) {
        var t = 'hello world';
        var a = 10;
        expect(charcount.counter(t)).to.equal(a);
        done();
});

it('API Empty String Test', function(done){
        request('http://charcount.40234272.qpc.hal.davecutting.uk/?text=', function(error, response, body){
                expect(body).to.equal('{"error":true,"string":"No Text Entered","answer":0}');
                done();
        });
});
