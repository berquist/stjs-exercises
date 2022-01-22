import assert from 'assert'

const ORIGIN_VERTICAL = 0;
const ORIGIN_HORIZONT = 0;
const WIDTH = 640;
const HEIGHT = 480;

class Rectangle {
    constructor(x, y, w, h) {
        // We could disallow invalid rectangles upon construction, but because
        // making immutable objects is hard, we'd still need to test separately
        // afterwards anyways for modified rects.

        // (x, y) are the coordinates of the lower left corner
        // (w, h) are the width and height.
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    isValid() {
        const topRightHoriz = this.x + this.w;
        const topRightVert = this.y + this.h;

        // Check for internal consistency: don't allow an "inverted" rect
        if (this.x > topRightHoriz) return false;
        if (this.y > topRightVert) return false;
        // Check bottom left point against screen
        if (this.x < ORIGIN_HORIZONT) return false;
        if (this.y < ORIGIN_VERTICAL) return false;
        // Check top right point against screen
        if (topRightHoriz > WIDTH) return false;
        if (topRightVert > HEIGHT) return false;
        return true;
    }

    static overlay(a, b) {

    }
}

assert((new Rectangle(0, 0, 0, 0).isValid()));
assert((new Rectangle(0, 0, 4, 4).isValid()));
assert(!(new Rectangle(0, -1, 4, 4).isValid()));
assert(!(new Rectangle(0, 0, 641, 4).isValid()));
assert(!(new Rectangle(4, 4, -4, -4).isValid()));
