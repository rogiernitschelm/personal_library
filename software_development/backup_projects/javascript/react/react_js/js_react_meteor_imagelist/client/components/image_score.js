import React from 'react';

const ImageScore = (props) => {
  console.log(props.down)
  const { ups, down } = props; // props.ups and props.downs
  const UPS_PERCENT = `${100 * (ups / (ups + down))}%`;
  const DOWN_PERCENT = `${100 * (down / (ups + down))}%`;

  return(
    <div>
      Ups/Downs
      <div className="progress">
        <div style={{ width: UPS_PERCENT }} className="progress-bar progress-bar-success progress-bar-striped" />
        <div style={{ width: DOWN_PERCENT }} className ="progress-bar progress-bar-danger progress-bar-striped" />
      </div>
    </div>
  )
};

export default ImageScore;
