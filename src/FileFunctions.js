const fs = require('fs');

export async function getNumFiles(dir) {
    let numFiles = -1;
    numFiles = await fs.readdir(dir, (err, files) => {
        return files.length;
    })
    return numFiles;
}