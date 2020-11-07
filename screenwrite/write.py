#!/usr/bin/env python

from PIL import Image
import sys

import inkyphat

inkyphat.set_colour('black')

inkyphat.set_border(inkyphat.BLACK)

inkyphat.set_image(Image.open("screencapture/screen.png"))

inkyphat.show()
