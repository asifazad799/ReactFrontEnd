function getCroppedImg(image, crop) {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");
  
    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";
  
    ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
    );
    // setFile(canvas)
//    return { 
//        "Base":canvas.toDataURL('image/jpeg'), 
//        "blob":canvas.toBlob("image/jpeg")
//     }
return {
    blob:new Promise((resolve, reject) => {
        canvas.toBlob(
          (blob) => {
            blob.name = "tumbnail";
            resolve(blob);
          },
          "image/jpeg",
          1
        );
      }),
    base:canvas.toDataURL('image/jpeg')
}

}   
module.exports = getCroppedImg