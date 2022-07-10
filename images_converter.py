from distutils import extension
from PIL import Image

import os

folder = "./assets/images/"

if __name__ == "__main__":
    
    for filename in os.listdir(folder):
        name, extension = os.path.splitext(os.path.basename(folder + filename))
        # print(name)
        # print("")
        if extension in [".png", ".jpeg"]:
            picture = Image.open(folder + filename)
            picture.save(folder + '/{}.webp'.format(name), "WEBP")

            # img = Image.open('./assets/portfolio/PlatziConf.png')
            # img.save('./assets/portfolio/PlatziConf.webp')