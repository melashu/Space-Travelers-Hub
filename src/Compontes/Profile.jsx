import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { getMissionState } from '../Store/reducers';
import { getRocketState } from '../Store/rocketReducer';

const Profile = () => {
  const missions = useSelector(getMissionState);
  const rockets = useSelector(getRocketState);
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

  return (
    <div className="tables">
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
    </div>
  );
};

export default Profile;
