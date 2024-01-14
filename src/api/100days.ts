import fs from 'fs';

const filename = '/100days/index.html';
export default async function api(res: any) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.write(await fs.readFileSync(filename, 'utf-8'));
  res.end();
}
