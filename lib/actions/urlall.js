'use strict';
const fileDuration = require('../helpers/file-duration');
const settings = require('../../settings');
const singlePlayerAnnouncement = require('../helpers/single-player-announcement');

let port;

const backupPresets = {};

function playUrl(player, values) {
  const url = decodeURIComponent(values[0]);
  let announceVolume = settings.announceVolume || 40;

  if (/^\d+$/i.test(values[1])) {
    // first parameter is volume
    announceVolume = values[1];
  }

  let duration = 40;
  if (/^\d+$/i.test(values[2])) {
    // second parameter is volume
    duration = values[2];
  }
  return singlePlayerAnnouncement(player, url, announceVolume, duration);
}

module.exports = function(api) {
  port = api.getPort();
  api.registerAction('url', playUrl);
}
