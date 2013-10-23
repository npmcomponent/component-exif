
/**
 * Module dependencies.
 */

var ExifReader = require('./js/ExifReader').ExifReader;

/**
 * Parse EXIF tags in `buf`.
 *
 * @param {ArrayBuffer} buf
 * @return {Object}
 * @api public
 */

module.exports = function(buf){
  var exif = new ExifReader;
  exif.load(buf);
  var tags = exif.getAllTags();
  var out = {};

  for(var tag in tags) {
    out[spaces(tag)] = tags[tag].value;
  }

  return out;
};

/**
 * Convert camelcase to lowercase words
 */

function spaces(str) {
  return str.replace(/([A-Z][a-z])|([A-Z])/g, function(m) {
    return (m.length == 2) ? ' ' + m.toLowerCase() : m.toLowerCase();
  });
}
