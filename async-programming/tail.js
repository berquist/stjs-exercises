import fs from 'fs-extra-promise'

const main = async (nlines, filenames) => {
    for (const filename of filenames) {
        const contents = await fs.readFileAsync(filename, { encoding: 'utf-8' });
        const lines = contents.split('\n');
        if (filenames.length > 1) {
            console.log(`=== ${filename} ===`);
        }
        const offset = lines.length - 1 - nlines;
        for (let i = offset; i < lines.length; i++) {
            console.log(lines[i]);
        }
    }
}

main(process.argv[2], process.argv.slice(3));
