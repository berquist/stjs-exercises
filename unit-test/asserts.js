import assert from 'assert'

// Checks the relative error between the given expected and calculated values.
const assertApproxEqual = (expected, calculated, message, tol) => {
    if (tol === undefined) {
        tol = 0.1;
    }
    const relError = Math.abs(expected - calculated) / Math.abs(expected);
    if (relError > tol) {
        throw new assert.AssertionError({message});
    }
};

// throws exception
// assertApproxEqual(1.0, 2.0, 'Values are too far apart');

// does not throw
assertApproxEqual(1.0, 2.0, 'Large margin of error', 1.0);
