import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const DragonProfile = () => {
  const dragons = useSelector((state) => state.dragon);
  const dragonCount = 0;

  console.log(dragons);
    dragons.map((dr) => {
      if (dr.reserved) {
        dragonCount += 1;
      }
      return dragonCount;
    });

  return (
    <>
      <h1>My Dragons</h1>
      <div>

        {
            

              dragons.map((drag) => {
                console.log(drag);
                return <div key={drag.id}>{drag.name}</div>;
              })

           } 

      </div>
    </>
  );
};

export default DragonProfile;
