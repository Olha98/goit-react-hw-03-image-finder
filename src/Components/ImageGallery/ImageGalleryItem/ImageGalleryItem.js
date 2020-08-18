import React from 'react'
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ img, onClick }) => {
  const { largeImageURL, type } = img;
  const getURL = () => {
    onClick(img.largeImageURL, img.type)
  };

  return (
    <li className="ImageGalleryItem" onClick={getURL}>
      <img src={largeImageURL} alt={type} className="ImageGalleryItem-image"/>
    </li>
  )
};

export default ImageGalleryItem

ImageGalleryItem.propTypes={
    img: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
}