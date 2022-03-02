// node가 14.17+ 이상버전이어야 함
// const counter = require('./counter.js');
import {increase, getCount} from './counter.js';

increase();
increase();
increase();
increase();
console.log(getCount());    