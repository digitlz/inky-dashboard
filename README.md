
# Inky Dashboard

## The idea
I had an [inky pHat](https://shop.pimoroni.com/products/inky-phat?variant=12549254905939) lying around and I decided that I wanted to have a small little dashboard that I could customise.  
The approach is to have a website based on Angular that is fully customisable to develop components that you could then put on the eInk display.  
This works by compiling the website, running a python server, taking a screenshot in the correct resolution

![alt text](img/image.jpg "Logo Title Text 1")


## TBD
- [ ] The PNG should be only black, white and red. It needs a conversion to make sure it is more compatible with the eInk display.
- [ ] The setup below has to be more detailed.

# Setup

- Install inky pHat libraries (https://github.com/pimoroni/inky-phat)

- npm i

- setup pupeteer-core for raspberry pi
```bash
sudo apt install chromium-browser chromium-codecs-ffmpeg
sudo install npm
npm install puppeteer-core@v1.11.0

const puppeteer = require('puppeteer-core');

const browser = await puppeteer.launch({executablePath: '/usr/bin/chromium-browser'});
```
(Source: https://www.youtube.com/watch?v=6LnJ1zW5464)