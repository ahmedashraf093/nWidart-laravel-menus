// import 'select2/dist/css/select2.min.css';

import $ from 'jquery';
window.$ = window.jQuery = $;

import 'select2/dist/js/select2.min.js';
import 'moment';
import 'moment-timezone';

import Highcharts from 'highcharts';

// For example, make Highcharts globally available or import in a component
window.Highcharts = Highcharts;

import { create as Ladda } from 'ladda';
window.Ladda = Ladda;

import 'icheck/icheck.min.js';
import PerfectScrollbar from 'perfect-scrollbar';
window.PerfectScrollbar = PerfectScrollbar;
import screenfull from 'screenfull';
window.screenfull = screenfull;

import jkanban from 'jkanban/dist/jkanban.min.js';
window.jkanban = jkanban;

import tinymce from 'tinymce/tinymce';
window.tinymce = tinymce;

import PatternLock from 'patternlock/dist/patternlock.min.js';
window.PatternLock = PatternLock;

import Tagify from '@yaireo/tagify/dist/tagify.min.js';
window.Tagify = Tagify;

import axios from 'axios';
window.axios = axios;

import Echo from 'laravel-echo';
window.Pusher = require('pusher-js');
window.Echo = Echo;

// ...rest of your code
