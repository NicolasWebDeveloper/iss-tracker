import mapView from './views/mapView';
import * as model from './model.js';
import { wait } from './helper';

const controlMapUpdate = async () => {
  try {
    await model.updatePosition();
    mapView.updateMap(model.state);
    await wait(1);
    controlMapUpdate();
  } catch (err) {
    console.error('🔥' + err);
  }
};

(async () => {
  await model.updatePosition();
  mapView.renderMap(model.state);
  controlMapUpdate();
})();
