import fs from 'fs-extra-promise'

// set operations taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

const union = (setA, setB) => {
    let _union = new Set(setA);
    for (let elem of setB) {
        _union.add(elem);
    }
    return _union;
}

const difference = (setA, setB) => {
    let _difference = new Set(setA);
    for (let elem of setB) {
        if (_difference.has(elem)) {
            _difference.delete(elem);
        }
    }
    return _difference;
}

const intersection = (setA, setB) => {
    let _intersection = new Set();
    for (let elem of setA) {
        if (setB.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}

const readFileLines = async (filename) => {
    const contents = await fs.readFileAsync(filename, { encoding: 'utf-8' });
    let s = new Set(contents.split('\n'));
    if (s.has('')) {
        s.delete('');
    }
    return s;
}

const main = async (leftFilename, rightFilename) => {
    const leftLines = await readFileLines(leftFilename);
    const rightLines = await readFileLines(rightFilename);
    const allLines = Array.from(union(leftLines, rightLines));
    allLines.sort();
    const leftOnly = difference(leftLines, rightLines);
    const rightOnly = difference(rightLines, leftLines);
    const commonLines = intersection(leftLines, rightLines);
    for (const line of allLines) {
        if (leftOnly.has(line)) {
            console.log(`1 ${line}`);
        } else if (rightOnly.has(line)) {
            console.log(`2 ${line}`);
        } else if (commonLines.has(line)) {
            console.log(`* ${line}`);
        }
    }
}

const leftFilename = process.argv[2];
const rightFilename = process.argv[3];
main(leftFilename, rightFilename);
