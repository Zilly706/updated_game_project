

const getCroppedImageUrl = (url: string) => {


  if(!url) return ''
  const target = 'media/';
  const index = url.indexOf(target) + target.length;
  const croppedUrl = url.slice(0, index) + 'crop/600/400/' + url.slice(index);
  console.log("Original URL:", url);
  console.log("Cropped URL:", croppedUrl);
  return croppedUrl;
};

export default getCroppedImageUrl;
