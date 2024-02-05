import { assert, expect, should } from "chai";
import { describe } from "mocha";
import calc from "../src/calc.js";

describe("calc.js", () => {
    let myVar;
    before(() => {
        myVar = 0;
    });
    beforeEach(() => myVar++);
    after(() => console.log(`myVar: ${myVar}`));

    it("Can add numbers", () => {
        expect(calc.sum(2,2)).to.equal(4);
        expect(calc.sum(8,2)).to.equal(10);
    });
    it("Can subtract numbers", () => {
        assert(calc.subtract(4,2) === 2);
        assert(calc.subtract(8,2) === 6);

    });
    it("Can multiply numbers", () => {
        should().exist(calc.multiply);
        expect(calc.multiply(4,2)).to.equal(8);
    });
    it("Can divide numbers", () => {
        expect(calc.divide(1,2)).to.equal(0.5);
    });
    it("0 divide error", () => {
        const err_msg = "0 division not allowed";
        expect(() => calc.divide(1,0))
            .to
            .Throw(err_msg);
    });
});