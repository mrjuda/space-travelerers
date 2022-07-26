import { createAsyncThunk } from '@reduxjs/toolkit';

import { GET_DATA, JOIN_MISSION, LEAVE_MISSION } from './missionsActions';

export const getData = createAsyncThunk(GET_DATA, async () => {
  const res = await fetch('https://api.spacexdata.com/v3/missions');
  const missions = await res.json();
  const missionsData = [];
  missions.forEach((mission) => {
    missionsData.push({
      id: mission.mission_id,
      mission: mission.mission_name,
      description: mission.description,
      reserved: false,
    });
  });
  return missionsData;
});

export const joinMission = (id) => ({ action: JOIN_MISSION, payload: id });

export const leaveMission = (id) => ({ action: LEAVE_MISSION, payload: id });
