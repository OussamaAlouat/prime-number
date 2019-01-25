import test from 'tape';
import {getDivisores} from "../index";

test('---- Divisors-----', (assert) => {
    const message = 'Number 4 have 3 divisors, so the result should be 3';
    const expectedResult = 3;
    getDivisores(4)
        .then((res) => {
            assert.equal(res, expectedResult, message);
            assert.end()

        })
});