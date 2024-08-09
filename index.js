[
  "exit",
  "logger",
  "spinner",
  "env",
  "validate",
  "module",
  "pluginResolution",
  "pluginOrder",
].forEach((m) => {
  Object.assign(exports, require(`./lib/${m}`));
});

exports.chalk = require("chalk");
exports.execa = require("execa");
exports.semver = require("semver");
