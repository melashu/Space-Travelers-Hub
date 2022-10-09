import reducers, { joinMission, leaveMission } from "../../Store/reducers";
it('Test the initial state', () => {
    expect(reducers(undefined, { type: undefined })).toEqual({ "loading": "idel", "mission": [] })
})

it('should joinMission button makes the reserve true?', () => {
    const previousState = {
        mission: [],
        loading: "fullfiled"
    }
    expect(reducers(previousState, joinMission('4556'))).not.toEqual({ "loading": "fullfiled", "mission": [{ "desc": "we are moving to the sky", "mission_id": "4556", "mission_name": "Sky Fly", "reserved": false }] })
})

it('should leaveMission button makes the reserve false?', () => {
    const previousState = {
        mission: [],
        loading: "fullfiled"
    }
    expect(reducers(previousState, joinMission('4556'))).not.toEqual({ "loading": "fullfiled", "mission": [{ "desc": "we are moving to the sky", "mission_id": "4556", "mission_name": "Sky Fly", "reserved": true }] })
})

