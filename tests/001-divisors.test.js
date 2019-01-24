import test from 'tape';
import {getDivisores} from "../index";

test('-------- Controller: GET /', (assert) => {
    const message = 'Result should be 3';
    const expectedResult = 3;
    getDivisores(4)
        .then((res) => {
            assert.equal(res, 3, message);
            assert.end()

        })
});