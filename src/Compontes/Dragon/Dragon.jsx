import React, { useEffect } from 'react';
import { Badge, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  cancleDragon,
  dragonThunk,
  getDragonState,
  reserveDragon,
} from '../../Store/dragonreducer';
import './dragon.css';

const Dragon = () => {
  const dragons = useSelector(getDragonState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dragonThunk());
  }, [dispatch]);

  const dragonsList = dragons.map((dragon) => (
    <div className="dragon-list" key={dragon.id}>
      <img className="banner" src={dragon.flickr_images[0]} alt="banner" />
      <div className="list">
        <h2 className="dragon-name">{dragon.name}</h2>
        <p className="desc">
          {dragon.reserved ? <Badge>Resereved</Badge> : null}
          {dragon.description}
        </p>
        {dragon.reserved ? (
          <Button
            variant="secondary"
            className="dragon-button"
            size="small"
            onClick={() => {
              dispatch(cancleDragon(dragon.id));
            }}
          >
            Cancel Reservation
          </Button>
        ) : (
          <Button
            className="dragon-button"
            onClick={() => {
              dispatch(reserveDragon(dragon.id));
            }}
            size="small"
          >
            Reserve Dragon
          </Button>
        )}
      </div>
    </div>
  ));

  return <div className="dragons">{dragonsList}</div>;
};

export default Dragon;
