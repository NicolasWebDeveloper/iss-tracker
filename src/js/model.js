import { getData } from './helper';

export const state = {
  coords: {
    lat: 0,
    lng: 0,
  },
  lastUpdate: 0,
};

export const updatePosition = async () => {
  try {
    const data = await getData();
    const { iss_position } = data;
    state.coords.lng = Number(iss_position.longitude);
    state.coords.lat = Number(iss_position.latitude);
    state.lastUpdate = data.timestamp;
  } catch (err) {
    throw err;
  }
};
