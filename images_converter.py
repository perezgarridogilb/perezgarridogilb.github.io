

from distutils import extension
from PIL import Image

import os

folder = "./assets/"

if __name__ == "__main__":
    
    for filename in os.listdir(folder):
        name, extension = os.path.splitext(os.path.basename(folder + filename))
        # print(name)
        # print("")
        if extension in [".png", ".JPEG"]:
            picture = Image.open(folder + filename)
            a=round(picture.width * 0.66)
            b=round(picture.height * 0.66)
            picture = picture.resize((a, b))
            picture.save(folder + '/{}.png'.format(name), "PNG")

            # img = Image.open('./assets/portfolio/PlatziConf.png')
            # img.save('./assets/portfolio/PlatziConf.webp')