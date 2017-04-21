const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


describe('fizzBuzz', function(){

    it('should return fizz-buzz if input is divisible by 15', function(){
        [15, 30, 45].forEach(function(input) {
            fizzBuzzer(input).should.equal('fizz-buzz');
        });
    })
    it('should return buzz if input is divisible by 5', function(){
        [5, 10, 20].forEach(function(input) {
            fizzBuzzer(input).should.equal('buzz');
        });
    })
    it('should return fizz if input is divisible by 3', function(){
        [9, 12, 18].forEach(function(input) {
            fizzBuzzer(input).should.equal('fizz');
        });
    })
    it('should return the input if input is not divisible by 15, 5, or 3', function(){
        [2, 7, 14].forEach(function(input) {
            fizzBuzzer(input).should.equal(input);
        });
    })
    it('should return an error if input is not a number', function(){
        const badInputs = ['string', true, {}, function(){}, []]
        badInputs.forEach(function(input) {
            (function() {
                fizzBuzzer(input).should.throw(Error);
                            console.log(input);
            })
           
        });
    })
});





// module.exports = function(num) {
// 	if (typeof num !== 'number') {
// 		throw Error('`num` must be a number');
// 	}
// 	if (num % 15 === 0) {
// 		return 'fizz-buzz';
// 	}
// 	if (num % 5 === 0) {
// 		return 'buzz';
// 	}
// 	if (num % 3 === 0) {
// 		return 'fizz';
// 	}
// 	else {
// 		return num;
// 	}
// }