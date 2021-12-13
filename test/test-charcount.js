var chai = require('chai');
var expect = require('chai').expect;
var charcount = require('../charcount');
var chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);

it('Char Count Test', function(done) {
        var t = 'hello world';
        var a = 10;
        expect(charcount.counter(t)).to.equal(a);
        done();
});

// {"error":true,"string":"No Text Entered","answer":0}

it('API Empty String Test', function(done){
        chai.request('http://charcount.40234272.qpc.hal.davecutting.uk')
                .get('/?text=')
                .end((err, response) => {
                        response.should.have.status(200);
                        response.body.should.be.a('object');
                        response.body.should.have.property('error');
                        response.body.should.have.property('string');
                        response.body.should.have.property('answer');
                        response.body.should.have.property('error').eq(true);
                        response.body.should.have.property('string').eq("No Text Entered");
                        response.body.should.have.property('answer').eq(0);
                        done();
        })
});

it('API Incorrect Parameter Test', function(done){
        chai.request('http://charcount.40234272.qpc.hal.davecutting.uk')
                .get('')
                .end((err, response) => {
                        response.should.have.status(200);
                        response.body.should.be.a('object');
                        response.body.should.have.property('error');
                        response.body.should.have.property('string');
                        response.body.should.have.property('answer');
                        response.body.should.have.property('error').eq(true);
                        response.body.should.have.property('string').eq("Incorrect Parameters Entered");
                        response.body.should.have.property('answer').eq(0);
                        done();
        })
});


it('API Correct Parameters - 11 Characters', function(done){
        chai.request('http://charcount.40234272.qpc.hal.davecutting.uk')
                .get('/?text=this is a test')
                .end((err, response) => {
                        response.should.have.status(200);
                        response.body.should.be.a('object');
                        response.body.should.have.property('error');
                        response.body.should.have.property('string');
                        response.body.should.have.property('answer');
                        response.body.should.have.property('error').eq(false);
                        response.body.should.have.property('string').eq("Contains 11 characters");
                        response.body.should.have.property('answer').eq(11);
                        done();
        })
});

it('API Correct Parameters - 11 Characters with numbers being removed', function(done){
        chai.request('http://charcount.40234272.qpc.hal.davecutting.uk')
                .get('/?text=thi8s is a 34 te3st')
                .end((err, response) => {
                        response.should.have.status(200);
                        response.body.should.be.a('object');
                        response.body.should.have.property('error');
                        response.body.should.have.property('string');
                        response.body.should.have.property('answer');
                        response.body.should.have.property('error').eq(false);
                        response.body.should.have.property('string').eq("Contains 11 characters");
                        response.body.should.have.property('answer').eq(11);
                        done();
        })
});

it('API Correct Parameters - 1 Character', function(done){
        chai.request('http://charcount.40234272.qpc.hal.davecutting.uk')
                .get('/?text=t')
                .end((err, response) => {
                        response.should.have.status(200);
                        response.body.should.be.a('object');
                        response.body.should.have.property('error');
                        response.body.should.have.property('string');
                        response.body.should.have.property('answer');
                        response.body.should.have.property('error').eq(false);
                        response.body.should.have.property('string').eq("Contains 1 characters");
                        response.body.should.have.property('answer').eq(1);
                        done();
        })
});

it('API Correct Parameters - 47 Characters', function(done){
        chai.request('http://charcount.40234272.qpc.hal.davecutting.uk')
                .get('/?text=i wonder how long ill have to type to get these characters')
                .end((err, response) => {
                        response.should.have.status(200);
                        response.body.should.be.a('object');
                        response.body.should.have.property('error');
                        response.body.should.have.property('string');
                        response.body.should.have.property('answer');
                        response.body.should.have.property('error').eq(false);
                        response.body.should.have.property('string').eq("Contains 47 characters");
                        response.body.should.have.property('answer').eq(47);
                        done();
        })
});
