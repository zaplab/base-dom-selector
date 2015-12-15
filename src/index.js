/**
 * @param {String} selector
 * @param {Element} [target]
 * @returns {Element}
 */
export function $(selector, target = document) {
    return target.querySelector(selector);
}

/**
 * @param {String} selector
 * @param {Element} [target]
 * @returns {Array}
 */
export function $$(selector, target = document) {
    return Array.prototype.slice.call(target.querySelectorAll(selector), 0);
}
