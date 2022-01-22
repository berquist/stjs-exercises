import assert from 'assert'

const assertApproxEqual = (left, right, tol, message) => {
    if (Math.abs(left - right) > tol) {
        throw new assert.AssertionError({message});
    }
};

// throws exception
// assertApproxEqual(1.0, 2.0, 0.01, 'Values are too far apart');

// does not throw
assertApproxEqual(1.0, 2.0, 10.0, 'Large margin of error');
