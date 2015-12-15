"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$ = $;
exports.$$ = $$;
/**
 * @param {String} selector
 * @param {Element} [target]
 * @returns {Element}
 */
function $(selector) {
  var target = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];

  return target.querySelector(selector);
}

/**
 * @param {String} selector
 * @param {Element} [target]
 * @returns {Array}
 */
function $$(selector) {
  var target = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];

  return Array.prototype.slice.call(target.querySelectorAll(selector), 0);
}