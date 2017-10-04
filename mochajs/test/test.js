var app = require('../app.js');
var expect = require('chai').expect;

describe('Test App JS', function () {
    it('should validate the init method', function() {
        var result = app.init();
        expect(typeof result).to.equal('string');
        expect(result).to.equal('Mocha');
    });
    it('should validate async execution', function (done) {
        setTimeout(function () {
            var result = app.add(2,2);
            expect(result).to.equal(4);
            done();
        },100);
    });

    it('tests this only', function () {
        expect(true).to.equal(true);
    });

    it.skip('skip this test', function() {
        expect(true).to.equal(true);
    });

    it('pending test case');

    before(function () {
        console.log("before");
    });

    beforeEach(function () {
        console.log("beforeEach");
    });

    after(function(){
        console.log("after");
    });

    afterEach(function(){
        console.log("afterEach");
    });
});