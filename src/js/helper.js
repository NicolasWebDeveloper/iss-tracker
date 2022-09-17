import config from './config';

const timeout = s => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject('Request took to long!');
    }, s * 1000);
  });
};

export const wait = s => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, s * 1000);
  });
};

export const getData = async () => {
  try {
    const res = await Promise.race([fetch(config.API_URL), timeout(config.TIMEOUT_TIME_SECONDS)]);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
