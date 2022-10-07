import React from "react";
import { useSelector } from "react-redux";
import { getMissionState } from "../Store/reducers";
import { Table } from "react-bootstrap";
const Profile = () => {
  const missions = useSelector(getMissionState);
  const filteredMission = missions.filter((mission) => mission.reserved);
  const reserevedMission = filteredMission.map((mission) => (
    <tr key={mission["mission_id"]}>
      <td>{mission["mission_name"]}</td>
    </tr>
  ));
  return (
    <div className="tables">
      <div className="rocket">
        <h2>Resireved Rocket</h2>
        <Table hover bordered>
          <tbody></tbody>
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
