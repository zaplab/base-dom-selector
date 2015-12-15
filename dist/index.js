"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$ = $;
exports.$$ = $$;
/**
 * @access static
 * @param {String} selector
 * @param {Element} [target]
 * @returns {Element}
 */
function $(selector) {
  var target = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];

  return target.querySelector(selector);
}

/**
 * @access static
 * @param {String} selector
 * @param {Element} [target]
 * @returns {Array}
 */
function $$(selector) {
  var target = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];

  return Array.prototype.slice.call(target.querySelectorAll(selector), 0);
}