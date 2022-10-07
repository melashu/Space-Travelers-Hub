import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  cancleRocket,
  rocketThunk,
  getRocketState,
  reserveRocket,
} from '../../Store/rocketReducer';
import './rocket.css';

const Rocket = () => {
  const rockets = useSelector(getRocketState);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length === 0) dispatch(rocketThunk());
  }, [dispatch, rockets.length]);
  const rocketsList = rockets.map((rocket) => (
    <div className="rocket-list" key={rocket.id}>
      <img className="banner" src={rocket.flickr_images[0]} alt="banner" />
      <div className="list">
        <h2 className="rocket-name">{rocket.rocket_name}</h2>
        <p className="desc">
          {rocket.reserved ? <Badge>Resereved</Badge> : null}
          {rocket.description}
        </p>
        {rocket.reserved ? (
          <Button
            variant="secondary"
            className="rocket-button"
            size="small"
            onClick={() => {
              dispatch(cancleRocket(rocket.id));
            }}
          >
            Cancel Reservation
          </Button>
        ) : (
          <Button
            className="rocket-button"
            onClick={() => {
              dispatch(reserveRocket(rocket.id));
            }}
            size="small"
          >
            Reserve rocket
          </Button>
        )}
      </div>
    </div>
  ));
  return <div className="rockets">{rocketsList}</div>;
};
export default Rocket;
