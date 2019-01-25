import test from 'tape';
import {getDivisors} from "../index";

test('---- Divisors of 4-----', (assert) => {
    const message = 'Number 4 have 3 divisors, so the result should be 3 (1,2,4)';
    const expectedResult = 3;
    getDivisors(4)
        .then((res) => {
            assert.equal(res, expectedResult, message);
            assert.end()

        })
});

test('---- Divisors of 10-----', (assert) => {
    const message = 'Number 10 have 4 divisors, so the result should be 4 (1,2,5,10)';
    const expectedResult = 4;
    const number = 10;
    getDivisors(number)
        .then((res) => {
            assert.equal(res, expectedResult, message);
            assert.end()

        })
});

