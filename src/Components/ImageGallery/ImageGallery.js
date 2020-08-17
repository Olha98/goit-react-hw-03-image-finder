import React from 'react'
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem'

const ImageGallery =({photo})=>{
console.log('photo',photo)
return(
 
  <ul className="ImageGallery">
    {photo.map(img => <ImageGalleryItem key={img.id}{...img}/> )}
</ul>


)
}
export default ImageGallery