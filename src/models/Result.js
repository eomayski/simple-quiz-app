import { write } from 'fs';
import fs from 'fs/promises';

let dbSerialized = await fs.readFile('./src/result.json', { encoding: 'utf-8' });
let result = JSON.parse(dbSerialized);

export default result;