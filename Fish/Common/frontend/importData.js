export function currentTime() {
  console.log(new Date().getTime())
}

import Icon from './assets/icon.png';
import Banner from './assets/banner.jpg';

import Fish from './assets/fish.png';

import Black from './assets/black.png';
import Brown from './assets/brown.png';
import Red from './assets/red.png';
import White from './assets/white.png';

export const ImportedData = {
  icon: Icon,
  banner: Banner,
  fish: Fish,
  black: Black,
  brown: Brown,
  red: Red,
  white: White
};

export default ImportedData;

export function logData(logOrNot) {
  if (logOrNot) {
    console.log("Logging data...")
  }
}

