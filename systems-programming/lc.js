import fs from 'fs'
import path from 'path'

const filenames = process.argv.slice(2);

let total = 0;
for (const filename of filenames) {
    // If you do this asynchronously, the "total" can be printed first.
    // fs.readFile(filename, (err, data) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         const lines = data.toString().split("\n");
    //         const length = lines.length;
    //         total += length;
    //         console.log(`${filename} ${length}`);
    //     }
    // });
    const data = fs.readFileSync(filename);
    const lines = data.toString().split("\n");
    const length = lines.length;
    total += length;
    console.log(`${filename} ${length}`);
}
console.log(`total ${total}`);
