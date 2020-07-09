/**
 * NB: This file was adapted from the example code at:
 * https://github.com/ricardo-ch/react-easy-crop
 * (see https://codesandbox.io/s/y09komm059)
 */

const createImage = (url) => (
  new Promise((resolve, reject) => {
    const imageEl = new Image();
    imageEl.addEventListener('load', () => resolve(imageEl));
    imageEl.addEventListener('error', (error) => reject(error));
    imageEl.src = url;
  })
);

function getRadianAngle(degreeValue) {
  return (degreeValue * Math.PI) / 180;
}

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * @param {File} image - Image File url
 * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
 * @param {number} rotation - optional rotation parameter
 */
export default async function getCroppedImg(imageSrc, pixelCrop, rotation = 0, resizeOptions) {
  const imageEl = await createImage(imageSrc);
  const canvasEl = document.createElement('canvas');
  const ctx = canvasEl.getContext('2d');

  const safeArea = Math.max(imageEl.width, imageEl.height) * 2;

  // set each dimensions to double largest dimension to allow for a safe area for the
  // image to rotate in without being clipped by canvas context
  canvasEl.width = safeArea;
  canvasEl.height = safeArea;

  // translate canvas context to a central location on image to allow rotating around the center.
  ctx.translate(safeArea / 2, safeArea / 2);
  ctx.rotate(getRadianAngle(rotation));
  ctx.translate(-safeArea / 2, -safeArea / 2);

  // draw rotated image and store data.
  ctx.drawImage(
    imageEl,
    safeArea / 2 - imageEl.width * 0.5,
    safeArea / 2 - imageEl.height * 0.5,
  );
  const data = ctx.getImageData(0, 0, safeArea, safeArea);

  // set canvas width to final desired crop size - this will clear existing context
  canvasEl.width = pixelCrop.width;
  canvasEl.height = pixelCrop.height;

  // paste generated rotate image with correct offsets for x,y crop values.
  ctx.putImageData(
    data,
    0 - safeArea / 2 + imageEl.width * 0.5 - pixelCrop.x,
    0 - safeArea / 2 + imageEl.height * 0.5 - pixelCrop.y,
  );

  if (resizeOptions) {
    const imgToResize = await createImage(canvasEl.toDataURL('image/jpeg'));
    imgToResize.width = resizeOptions.width;
    canvasEl.width = resizeOptions.width;
    canvasEl.height = resizeOptions.width * (1 / resizeOptions.aspect);
    ctx.drawImage(imgToResize, 0, 0, 800, 600);
  }

  return canvasEl.toDataURL('image/jpeg');
}
