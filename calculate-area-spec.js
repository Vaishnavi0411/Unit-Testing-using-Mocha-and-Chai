const chai = require('chai');
const expect = chai.expect;
const solution = require('../solution/calculate-area-solution');

describe('solution', () => {
    it('should have function calculateAreaOfSquare()', () => {
        expect(typeof solution.calculateAreaOfSquare).to.equal('function');
    });
    it('should have function calculateAreaOfCircle()', () => {
        expect(typeof solution.calculateAreaOfCircle).to.equal('function');
    });
    it('should have function calculateAreaOfRectangle()', () => {
        expect(typeof solution.calculateAreaOfRectangle).to.equal('function');
    });
});


describe('Function calculateAreaOfSquare', () => {
    it('should return area of square for the valid input provided', () => {
        let result = solution.calculateAreaOfSquare(5);
        expect(result).to.equal(25);
    });

    it('should return message insufficient inputs if less than 1 parameter is passed', () => {
        let result = solution.calculateAreaOfSquare();
        expect(result).to.equal('insufficient inputs');
    });

    it('should return message invalid input type if the parameter is not a number', () => {
        let result = solution.calculateAreaOfSquare('5');
        expect(result).to.equal('invalid input type');
    });

    it('should return message incorrect input if the value of the parameter is less than or equal to 0', () => {
        let result = solution.calculateAreaOfSquare(-5);
        expect(result).to.equal('incorrect input');
    });
});

describe('Function calculateAreaOfCircle', () => {
    it('should return area of circle for the valid input provided', () => {
        let result = solution.calculateAreaOfCircle(5);
        expect(result).to.equal(78.5);
    });

    it('should return message insufficient inputs if less than 1 parameter is passed', () => {
        let result = solution.calculateAreaOfCircle();
        expect(result).to.equal('insufficient inputs');
    });

    it('should return message invalid input type if the parameter is not a number', () => {
        let result = solution.calculateAreaOfCircle('5');
        expect(result).to.equal('invalid input type');
    });

    it('should return message incorrect input if the value of the parameter is less than or equal to 0', () => {
        let result = solution.calculateAreaOfCircle(-5);
        expect(result).to.equal('incorrect input');
    });
});

describe('Function calculateAreaOfRectangle', () => {
    it('should return area of rectangle for the valid inputs provided', () => {
        let result = solution.calculateAreaOfRectangle(5, 3);
        expect(result).to.equal(15);
    });

    it('should return message insufficient inputs if less than 2 parameters are passed', () => {
        let result = solution.calculateAreaOfRectangle(8);
        expect(result).to.equal('insufficient inputs');
    });

    it('should return message invalid input types if the parameters are not of type numbers', () => {
        let result = solution.calculateAreaOfRectangle('5', 3);
        expect(result).to.equal('invalid input types');
    });

    it('should return message incorrect input if the value of the parameter is less than or equal to 0', () => {
        let result = solution.calculateAreaOfRectangle(-5, 3);
        expect(result).to.equal('incorrect input');
    });

});