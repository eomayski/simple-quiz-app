import fs from "fs/promises";

let dataSerialized = await fs.readFile('./src/data.json', { encoding: 'utf-8' });
const data = JSON.parse(dataSerialized);

export default data