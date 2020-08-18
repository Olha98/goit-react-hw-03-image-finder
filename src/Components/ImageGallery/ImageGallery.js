import React from 'react'
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem'
import PropTypes, { object } from 'prop-types';

const ImageGallery = ({ photo, onClick }) => {
  return (
    <>
      <ul className="ImageGallery">
        {photo.map(img => <ImageGalleryItem key={img.id} img={img} onClick={onClick}/> )}
      </ul>
    </>


  )
};
export default ImageGallery

ImageGallery.propTypes={
    photo: PropTypes.arrayOf(object).isRequired,
    onClick: PropTypes.func.isRequired,
}