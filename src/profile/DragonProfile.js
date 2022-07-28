import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const DragonProfile = () => {
  const dragons = useSelector((state) => state.dragon);
  const filterDragons = dragons.filter((drag) => drag.reserved === true);

  return (
    <>
      <h1>My Dragons</h1>
      <div>

        {

           filterDragons.map((drag) => <div key={drag.id}>{drag.name}</div>)

           }

      </div>
    </>
  );
};

export default DragonProfile;
