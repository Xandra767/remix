import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const yandexHtmlSourcePath = path.join(__dirname, 'yandex_1fddcc4fb7ef574f.html');
const yandexHtmlDestinationPath = path.join(__dirname, 'dist/yandex_1fddcc4fb7ef574f.html');

fs.copyFileSync(yandexHtmlSourcePath, yandexHtmlDestinationPath);

console.log('_redirects and yandex HTML copied to dist folder');
