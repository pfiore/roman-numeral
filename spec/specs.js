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

    it('takes 49 and returns, XXXXIX', function() {
        expect(numberConvert(49)).to.equal("XXXXIX");
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


});
