import fs from 'fs';

const text = fs.readFileSync('input.txt', 'utf8');
const encoded = Buffer.from(text, 'utf8').toString('base64');

fs.writeFileSync('output.txt', encoded);
