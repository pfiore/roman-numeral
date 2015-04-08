describe('numberConvert', function() {
    it('takes 1 and returns, I', function() {
        expect(numberConvert(1)).to.equal("I");
    });

    it('takes 2 and returns, II', function() {
        expect(numberConvert(2)).to.equal("II");
    });

    it('takes 3 and returns, III', function() {
        expect(numberConvert(3)).to.equal("III");
    });

    it('takes 4 and returns, IV', function() {
        expect(numberConvert(4)).to.equal("IV");
    });

    it('takes 5 and returns, V', function() {
        expect(numberConvert(5)).to.equal("V");
    });

    it('takes 6 and returns, VI', function() {
        expect(numberConvert(6)).to.equal("VI");
    });

    it('takes 7 and returns, VII', function() {
        expect(numberConvert(7)).to.equal("VII");
    });

    it('takes 8 and returns, VIII', function() {
        expect(numberConvert(8)).to.equal("VIII");
    });

    it('takes 9 and returns, IX', function() {
        expect(numberConvert(9)).to.equal("IX");
    });

    it('takes 10 and returns, X', function() {
        expect(numberConvert(10)).to.equal("X");
    });

    it('takes 15 and returns, XV', function() {
        expect(numberConvert(15)).to.equal("XV");
    });

    it('takes 26 and returns, XXVI', function() {
        expect(numberConvert(26)).to.equal("XXVI");
    });

    it('takes 49 and returns, XLIX', function() {
        expect(numberConvert(49)).to.equal("XLIX");
    });

    it('takes 50 and returns, L', function() {
        expect(numberConvert(50)).to.equal("L");
    });

    it('takes 51 and returns, LI', function() {
        expect(numberConvert(51)).to.equal("LI");
    });

    it('takes 83 and returns, LXXXIII', function() {
        expect(numberConvert(83)).to.equal("LXXXIII");
    });

    it('takes 99 and returns, XCIX', function() {
        expect(numberConvert(99)).to.equal("XCIX");
    });

    it('takes 100 and returns, C', function() {
        expect(numberConvert(100)).to.equal("C");
    });

    it('takes 149 and returns, CXLIX', function() {
        expect(numberConvert(149)).to.equal("CXLIX");
    });

    it('takes 199 and returns, CXCIX', function() {
        expect(numberConvert(199)).to.equal("CXCIX");
    });

    it('takes 333 and returns, CCCXXXIII', function() {
        expect(numberConvert(333)).to.equal("CCCXXXIII");
    });

    it('takes 499 and returns, CDXCIX', function() {
        expect(numberConvert(499)).to.equal("CDXCIX");
    });

    it('takes 500 and returns, D', function() {
        expect(numberConvert(500)).to.equal("D");
    });

    it('takes 999 and returns, CMXCIX', function() {
        expect(numberConvert(999)).to.equal("CMXCIX");
    });

    it('takes 1000 and returns, M', function() {
        expect(numberConvert(1000)).to.equal("M");
    });

    it('takes 3999 and returns, MMMCMXCIX', function() {
        expect(numberConvert(3999)).to.equal("MMMCMXCIX");
    });

    it('takes 4000 and returns, Invalid Number', function() {
        expect(numberConvert(4000)).to.equal("Invalid Number");
    });

    it('takes 0 and returns, Invalid Number', function() {
        expect(numberConvert(0)).to.equal("Invalid Number");
    });

});
