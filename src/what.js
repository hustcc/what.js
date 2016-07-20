/**
  Copyright (c) 2016 hustcc http://www.atool.org/
  License: MIT 
  https://github.com/hustcc/what.js
**/
/* jshint expr: true */ 
!function (root, factory) {
  if (typeof module === 'object' && module.exports)
    module.exports = factory();
  else
    root.what = factory();
}(typeof window !== 'undefined' ? window : this, function () {
  /**
   *  what( var ) -> String
   *  - var: the var which want to typeof
   *  get what is the type of the input var.
  **/
  return function (v) {
    if (v === null) {
      return 'null';
    }
    if (v !== Object(v)) {
      return typeof v;
    }
    return ({}).toString.call(v).slice(8, -1).toLowerCase();
  };
});