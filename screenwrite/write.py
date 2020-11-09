#!/usr/bin/env python

from PIL import Image
import sys
import inkyphat

inkyphat.set_colour('yellow')

inkyphat.set_border(inkyphat.BLACK)

image_file = Image.open("screencapture/screen.png") # open colour image
image_file = image_file.convert('1') # convert image to black and white
image_file.save('screencapture/result.png')

inkyphat.set_image(Image.open("screencapture/result.png"))

inkyphat.show()
