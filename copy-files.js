const fs = require('fs');
const path = require('path');

const yandexHtmlSourcePath = path.join(__dirname, 'yandex_1fddcc4fb7ef574f.html');
const yandexHtmlDestinationPath = path.join(__dirname, 'dist/yandex_1fddcc4fb7ef574f.html');

fs.copyFileSync(yandexHtmlSourcePath, yandexHtmlDestinationPath);

console.log('_redirects and yandex HTML copied to dist folder');
