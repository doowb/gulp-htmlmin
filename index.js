/*
 * gulp-htmlmin
 * https://github.com/jonschlinkert/gulp-htmlmin
 *
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT license.
 */


var Buffer = require('buffer').Buffer;
var es = require('event-stream');
var htmlmin = require('html-minifier');
var gutil = require('gulp-util');

module.exports = function (opts) {
  'use strict';

  opts = opts || {
    showStack: false
  };

  return es.map(function (file, cb) {
    try {
      file.contents = new Buffer(htmlmin.minify(String(file.contents), opts));
    } catch (err) {
      return cb(new gutil.PluginError('gulp-htmlmin', err, opts));
    }
    cb(null, file);
  });
};