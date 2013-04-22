
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
  return exif.getAllTags();
};
