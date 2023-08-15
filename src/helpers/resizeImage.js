
export const dataURItoBlob =  (dataURI) => {
  const bytes = dataURI.split(',')[0].indexOf('base64') >= 0
    ? atob(dataURI.split(',')[1])
    : unescape(dataURI.split(',')[1]);
  const mime = dataURI.split(',')[0].split(':')[1].split(';')[0];
  const max = bytes.length;
  const ia = new Uint8Array(max);
  for (let i = 0; i < max; i += 1) ia[i] = bytes.charCodeAt(i);
  return new Blob([ia], { type: mime });
};

export const resizeImage = async ({ file, maxSize }) => {
  const reader = new FileReader();
  const image = new Image();
  const canvas = document.createElement('canvas');


   const resize = (type) => {
    let { width, height } = image;
   
    if (width > height) {
      if (width > maxSize) {
        height *= maxSize / width;
        width = maxSize;
      }
    } else if (height > maxSize) {
      width *= maxSize / height;
      height = maxSize;
    }

    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d').drawImage(image, 0, 0, width, height);

    const acceptType = ['image/png','image/jpg','image/jpeg'];
    if(acceptType.includes(type)){
        const dataUrl = canvas.toDataURL(type);
        return dataURItoBlob(dataUrl);
         
    }

    return new Error('Image Invalide');
   
  };

  return await new Promise((ok, no) => {
    if (!file.type.match(/image.*/)) {
      no(new Error('Not an image'));
      return;
    }
    
    reader.onload = (readerEvent) => {
      image.onload = () => ok(resize(file.type));
      image.src = readerEvent.target.result;
    };
    reader.readAsDataURL(file);
  });
};

//ReadURL

export  async function resizeImages(event, maxSize){

    let imgx =[]
    const files = Array.from(event.target.files);
    files.map( async (file) =>{
        try {
          const imgs =  await resizeImage({ file: file, maxSize: maxSize });
          imgx.push(imgs)
        } catch (error) {
          console.log(error);
        }
    }) 

    return imgx;
  
  
}


