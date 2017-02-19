import React from 'react';
import ImageDetail from './image_detail';

const ImageList = (props) => {

  const VALID_IMAGES = props.images.filter(image => !image.is_album);
  const RENDERED_IMAGES = VALID_IMAGES.map(image =>
    <ImageDetail key={image.title} image={image} />
  )
  return (
    <ul className="media-list list-group">
      {RENDERED_IMAGES}
    </ul>
  );
};

export default ImageList;
