import assert from 'assert'

const assertApproxEqual = (left, right, message, tol) => {
    if (tol === undefined) {
        tol = 0.1;
    }
    if (Math.abs(left - right) > tol) {
        throw new assert.AssertionError({message});
    }
};

// throws exception
// assertApproxEqual(1.0, 2.0, 'Values are too far apart');

// does not throw
assertApproxEqual(1.0, 2.0, 'Large margin of error', 1.0);
