import fs from "fs/promises";

let dataSerialized = await fs.readFile('./src/data.json', { encoding: 'utf-8' });
let data = JSON.parse(dataSerialized);

export default data