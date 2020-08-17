import React from 'react'

const ImageGalleryItem=({largeImageURL, id, type})=>{
return(
  <li className="ImageGalleryItem" data-id={id}>
  <img src={largeImageURL} alt={type} className="ImageGalleryItem-image" />
</li>
)
}

export default ImageGalleryItem