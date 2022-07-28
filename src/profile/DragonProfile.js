import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const DragonProfile = () => {
  const dragons = useSelector((state) => state.dragon);
  let dragonCount = 0;

  dragons.map((dr) => {
    if (dr.reserved === true) {
      dragonCount += 1;
    }
    return dragonCount;
  });

  return (
    <>
      <h1>My Dragons</h1>
      <div>

        {
            dragonCount > 0 ? (
              dragons.map((drag) => <div key={drag.id}>{drag.name}</div>)
            )
              : (
                <div>
                  You have no dragons
                </div>
              )

           }

      </div>
    </>
  );
};

export default DragonProfile;
