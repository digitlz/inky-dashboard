
# Setup

- Install inky pHat libraries

- npm i

- setup pupeteer
```bash
sudo apt install chromium-browser chromium-codecs-ffmpeg
sudo install npm
npm install puppeteer-core@v1.11.0

const puppeteer = require('puppeteer-core');

const browser = await puppeteer.launch({executablePath: '/usr/bin/chromium-browser'});
```