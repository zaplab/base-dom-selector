
/**
 * @type {HTMLDocument}
 */
const document = window.document;

/**
 * @param {String} selector
 * @param {Element|HTMLDocument} [target]
 * @returns {Element}
 */
export function $(selector, target = document) {
    return target.querySelector(selector);
}

/**
 * @param {String} selector
 * @param {Element|HTMLDocument} [target]
 * @returns {Array}
 */
export function $$(selector, target = document) {
    return Array.prototype.slice.call(target.querySelectorAll(selector), 0);
}

/**
 * @param {Element} target
 * @param {String} [selector]
 * @returns {Element|null}
 */
export function getNext(target, selector) {
    let nextElement = target.nextElementSibling;
    let foundElement = null;

    if (typeof selector !== 'undefined') {
        const $all = $$(selector);

        while (nextElement) {
            if ($all.indexOf(nextElement) !== - 1) {
                foundElement = nextElement;
                break;
            }

            nextElement = nextElement.nextElementSibling;
        }
    } else {
        foundElement = nextElement;
    }

    return foundElement;
}

/**
 * @param {Element} target
 * @param {String} [selector]
 * @returns {Element|null}
 */
export function getParent(target, selector) {
    let newTarget = target.parentNode;
    let parent = null;

    if (typeof selector !== 'undefined') {
        const $all = $$(selector);

        // 9 = DOCUMENT_NODE
        while (newTarget && (newTarget.nodeType !== 9)) {
            // 1 = ELEMENT_NODE
            if ((newTarget.nodeType === 1) && ($all.indexOf(newTarget) !== - 1)) {
                parent = newTarget;
                break;
            }

            newTarget = newTarget.parentNode;
        }
    } else {
        // 1 = ELEMENT_NODE, 9 = DOCUMENT_NODE
        if (newTarget && (newTarget.nodeType !== 9) && (newTarget.nodeType === 1)) {
            parent = newTarget;
        }
    }

    return parent;
}

/**
 * @param {Element} target
 * @param {String} [selector]
 * @returns {Array<Element>}
 */
export function getParents(target, selector) {
    let newTarget = target.parentNode;
    let condition = () => true;
    const parents = [];

    if (typeof selector !== 'undefined') {
        const $all = $$(selector);

        condition = conditionTarget => {
            return ($all.indexOf(conditionTarget) !== - 1);
        };
    }

    // 9 = DOCUMENT_NODE
    while (newTarget && (newTarget.nodeType !== 9)) {
        // 1 = ELEMENT_NODE
        if ((newTarget.nodeType === 1) && condition(newTarget)) {
            parents.push(newTarget);
        }

        newTarget = newTarget.parentNode;
    }

    return parents;
}
