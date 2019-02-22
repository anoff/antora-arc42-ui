'use strict'

const standard = require('gulp-standard')
const vfs = require('vinyl-fs')

module.exports = (files) => (done) =>
  vfs
    .src(files)
    .pipe(standard())
    .pipe(standard.reporter('default', { breakOnError: true }))
    .on('error', done)
