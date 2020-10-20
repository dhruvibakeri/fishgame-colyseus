export function currentTime() {
  console.log(`CurrentTime: ${new Date().getTime()}`);
}

import Icon from './assets/icon.png';
import Data from './assets/data.xml';
import Notes from './assets/data.csv';
import toml from './assets/data.toml';
import yaml from './assets/data.yaml';
import json from './assets/data.json5';


import Banner from './assets/banner.jpg';

import Fish from './assets/fish.png';

import Black from './assets/black.png';
import Brown from './assets/brown.png';
import Red from './assets/red.png';
import White from './assets/white.png';

const ImportedData = {
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
    console.log(Data);
    console.log(Notes);

    console.log(toml.title); // output `TOML Example`
    console.log(toml.owner.name); // output `Tom Preston-Werner`

    console.log(yaml.title); // output `YAML Example`
    console.log(yaml.owner.name); // output `Tom Preston-Werner`

    console.log(json.title); // output `JSON5 Example`
    console.log(json.owner.name); // output `Tom Preston-Werner`
  }
}

