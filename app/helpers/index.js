import config from '../../config/config.js';
import fs from 'fs';
import path from 'path';


let manifest = {};
let manifestPath = path.resolve(__dirname, '../', '../', 'public', 'assets', 'kails_manifest.json');
if (fs.existsSync(manifestPath)) {
  manifest = require('../../public/assets/kails_manifest.json');
}
 

exports.assetUrl = function (asset) {
  const publicAsset = manifest[asset];
  let url = null;
  if(publicAsset === undefined) {
    url = config.assetHost + '/' + asset;
  }
  else {
    url = config.assetHost + '/assets/' + publicAsset;
  }
  return url;
};