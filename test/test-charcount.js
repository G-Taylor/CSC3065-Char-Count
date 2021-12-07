var expect  = require('chai').expect;
var charcount = require('../charcount');

let url = 'http://charcount.40234272.qpc.hal.davecutting.uk';

it('Char Count Test', function(done) {
        var t = 'hello world';
        var a = 10;
        expect(charcount.counter(t)).to.equal(a);
        done();
});

it('API Empty String Test', function(done){
        let query = '?/text='
        request(url + query, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                done();
        });
});
