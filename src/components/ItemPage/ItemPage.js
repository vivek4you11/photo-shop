import React from 'react';

import { data } from '../../config/API_Data';

const ItemPage = props => {
  let abstractedPhoto = data.rsp.photos.photo.filter(item => {
    return item._id === props.match.params.id;
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      {
        <img
          alt={abstractedPhoto[0]._farm}
          className="item"
          src={`https://farm${abstractedPhoto[0]._farm}.staticflickr.com/${abstractedPhoto[0]._server}/${abstractedPhoto[0]._id}_${abstractedPhoto[0]._secret}.jpg`}
        />
      }
    </div>
  );
};

export default ItemPage;
