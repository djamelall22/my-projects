import React from 'react';

const ImagesList = (props) => {
  const images = props.images.map((image) => (
    <img key={image.id} src={image.urls.regular} alt={image.description} />
  ));
  return <div>{images}</div>;
};

export default ImagesList;
