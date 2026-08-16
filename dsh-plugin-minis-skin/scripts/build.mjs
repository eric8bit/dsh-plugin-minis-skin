// 极简构建：src -> lib 直拷（纯 JS，无转译）。tsc 构建产物布局与之一致。
import { mkdirSync, copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const targets = [
  ['src/index.js', 'lib/index.js'],
  ['src/client.js', 'lib/client.js'],
  ['src/types/index.d.ts', 'lib/types/index.d.ts'],
  ['src/types/client/index.d.ts', 'lib/types/client/index.d.ts'],
];
for (const [from, to] of targets) {
  const dest = join(root, to);
  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(join(root, from), dest);
  console.log('built', to);
}
