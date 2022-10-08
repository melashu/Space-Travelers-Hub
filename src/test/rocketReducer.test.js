import reducers, { reserveRocket, cancleRocket } from '../Store/rocketReducer';

it('Test the initial state', () => {
  expect(reducers(undefined, { type: undefined })).toEqual({ rocketloading: 'idel', rockets: [] });
});
it('should joinMission button makes the reserve true?', () => {
  const previousState = {
    rockets: [],
    rocketloading: 'fullfiled',
  };
  expect(reducers(previousState, reserveRocket('8119'))).not.toEqual({
    rocketloading: 'fullfiled',
    rockets: [{
      description: 'we are moving to the sky', id: '8119', rocket_name: 'Sky Fly', reserved: false,
    }],
  });
});
it('should leaveMission button makes the reserve false?', () => {
  const previousState = {
    rockets: [],
    rocketloading: 'fullfiled',
  };
  expect(reducers(previousState, cancleRocket('8119'))).not.toEqual({
    rocketloading: 'fullfiled',
    rockets: [{
      description: 'we are moving to the sky', id: '8119', rocket_name: 'Sky Fly', reserved: true,
    }],
  });
});
