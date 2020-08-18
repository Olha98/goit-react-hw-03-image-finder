import React from 'react'
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem'

const ImageGallery = ({ photo, onClick }) => {

  return (
    <>
      <ul className="ImageGallery">
        {photo.map(img => <ImageGalleryItem key={img.id} img={img} onClick={onClick}/> )}
      </ul>
    </>


  )
}
export default ImageGallery