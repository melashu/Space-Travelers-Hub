import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  getLoadingState,
  getMissionState,
  joinMission,
  leaveMission,
  missionThunk,
} from '../Store/reducers';

const Mission = () => {
  const missions = useSelector(getMissionState);
  const loadingStatus = useSelector(getLoadingState);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missions.length === 0) dispatch(missionThunk());
  }, [dispatch, missions.length]);
  const rows = missions.map((row) => (
    <tr key={row.mission_id}>
      <td>{row.mission_name}</td>
      <td>{row.description}</td>
      <td className="">
        {' '}
        {row.reserved ? (
          <Badge bg="primary">Active Member </Badge>
        ) : (
          <Badge bg="secondary">NOT Member </Badge>
        )}
      </td>
      <td className="button-container status">
        {' '}
        {row.reserved ? (
          <Button
            size="lg"
            variant="outline-danger"
            onClick={() => {
              dispatch(leaveMission(row.mission_id));
            }}
          >
            Leave Missions
          </Button>
        ) : (
          <Button
            variant="outline-secondary"
            size="lg"
            onClick={() => {
              dispatch(joinMission(row.mission_id));
            }}
          >
            Joining Missions
          </Button>
        )}
      </td>
    </tr>
  ));
  return (
    <>
      {loadingStatus === 'idel' && (
        <Badge bg="primary" className="loadingStatus">
          Initializing....
        </Badge>
      )}
      {loadingStatus === 'pending' && (
        <Badge bg="info" className="loadingStatus">
          Pending....
        </Badge>
      )}
      {loadingStatus === 'rejected' && (
        <Badge bg="danger" className="loadingStatus">
          Something wents wrong
        </Badge>
      )}
      {loadingStatus === 'fulfilled' && (
        <Table striped hover size="md" responsive bordered>
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      )}
    </>
  );
};

export default Mission;
