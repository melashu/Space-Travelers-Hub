import React from 'react';
import { Table } from 'react-bootstrap';
import { getMissionState } from '../Store/reducers';
import { getRocketState } from '../Store/rocketReducer';
import { useAppSelector } from '../hooks/hooks';
import { getDragonState } from '../Store/dragonreducer';

const Profile = () => {
  const missions = useAppSelector(getMissionState);
  const rockets = useAppSelector(getRocketState);
  const dragons = useAppSelector(getDragonState);
  const filteredMission = missions.filter((mission) => mission.reserved);
  const reserevedMission = filteredMission.map((mission) => (
    <tr key={mission.mission_id}>
      <td>{mission.mission_name}</td>
    </tr>
  ));

  const filteredRocket = rockets.filter((rocket) => rocket.reserved);
  const reserevedRocket = filteredRocket.map((rocket) => (
    <tr key={rocket.id}>
      <td>{rocket.rocket_name}</td>
    </tr>
  ));

  const filteredDragon = dragons.filter((dragon) => dragon.reserved);
  const reserevedDragon = filteredDragon.map((dragon) => (
    <tr key={dragon.id}>
      <td>{dragon.name}</td>
    </tr>
  ));

  return (
    <div className="tables" data-testid="table">
      <div className="rocket">
        <h2>Resireved Rocket</h2>
        <Table hover bordered>
          <tbody>{reserevedRocket}</tbody>
        </Table>
      </div>
      <div className="mission">
        <h2>Resireved Mission</h2>
        <Table hover bordered>
          <tbody>{reserevedMission}</tbody>
        </Table>
      </div>
      <div className="dragon">
        <h2>Resireved Dragon</h2>
        <Table hover bordered>
          <tbody>{reserevedDragon}</tbody>
        </Table>
      </div>
    </div>
  );
};

export default Profile;
