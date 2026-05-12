import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

const envFiles = [
  { src: 'packages/backend/.env.example', dest: 'packages/backend/.env' },
  { src: 'packages/frontend/.env.example', dest: 'packages/frontend/.env' }
];

console.log('🔧 Setting up environment files...\n');

envFiles.forEach(({ src, dest }) => {
  const srcPath = path.join(rootDir, src);
  const destPath = path.join(rootDir, dest);

  if (fs.existsSync(srcPath) && !fs.existsSync(destPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`✅ Created ${dest}`);
  } else if (fs.existsSync(destPath)) {
    console.log(`⏭️  Skipped ${dest} (already exists)`);
  } else {
    console.log(`⚠️  ${src} not found`);
  }
});

console.log('\n📝 Update the .env files with your credentials:');
console.log('   - packages/backend/.env');
console.log('   - packages/frontend/.env');
