'use strict';
const _ = require('lodash');
const core = require('./core');
const RippleAPI = require('./api/api');

module.exports = _.assign({}, core, {RippleAPI: RippleAPI});
