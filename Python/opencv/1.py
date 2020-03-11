import cv2
import matplotlib.pyplot as plt
import numpy as np

img = cv2.imread('ss.png',0)  #0=Grayscale, 1 = color , -1 = unchanged

# cv2.imshow('image',img)
# cv2.waitKey(0)
# cv2.destroyAllWindows()
# plt.imshow(img,cmap='gray',interpolation='bicubic')
# plt.show()

cv2.imwrite('ss-gray.png',img)