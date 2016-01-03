/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _zapBaseDomSelector = __webpack_require__(1);

	describe('base-dom-selector', function () {
	    var element1 = document.createElement('ul');
	    element1.id = 'element1';

	    var childElement0 = document.createElement('li');
	    childElement0.className = 'child first';

	    var childElement1 = document.createElement('li');
	    childElement1.className = 'child';

	    var childElement2 = document.createElement('li');
	    childElement2.className = 'child last';

	    beforeEach(function () {
	        element1.appendChild(childElement1);
	        element1.appendChild(childElement2);
	        document.body.appendChild(childElement0);
	        document.body.appendChild(element1);
	    });

	    afterEach(function () {});

	    describe('base-dom-selector should have the following methods', function () {
	        it('$', function () {
	            expect(_zapBaseDomSelector.$).toEqual(jasmine.any(Function));
	        });

	        it('$$', function () {
	            expect(_zapBaseDomSelector.$$).toEqual(jasmine.any(Function));
	        });

	        it('getNext', function () {
	            expect(_zapBaseDomSelector.getNext).toEqual(jasmine.any(Function));
	        });

	        it('getParent', function () {
	            expect(_zapBaseDomSelector.getParent).toEqual(jasmine.any(Function));
	        });

	        it('getParents', function () {
	            expect(_zapBaseDomSelector.getParents).toEqual(jasmine.any(Function));
	        });
	    });

	    describe('$', function () {
	        it('$("#element1") should find #element1', function () {
	            var $element1 = (0, _zapBaseDomSelector.$)('#element1');

	            expect($element1).not.toBe(null);
	        });

	        it('$("#element1", parentElement) should find #element1 inside parentElement', function () {
	            var $element1 = (0, _zapBaseDomSelector.$)('#element1', document.body);

	            expect($element1).not.toBe(null);
	        });
	    });

	    describe('$$', function () {
	        it('$(".child") should find all elements with class .child', function () {
	            var $children = (0, _zapBaseDomSelector.$$)('.child');

	            expect($children.length).toBe(3);
	        });

	        it('$(".child", parentElement) should find all elements with class .child of parentElement', function () {
	            var $children = (0, _zapBaseDomSelector.$$)('.child', element1);

	            expect($children.length).toBe(2);
	        });
	    });

	    describe('getNext', function () {
	        it('getNext(childElement1) should be childElement2', function () {
	            var $next = (0, _zapBaseDomSelector.getNext)(childElement1);

	            expect($next).toBe(childElement2);
	        });

	        it('getNext(childElement2) should be null', function () {
	            var $next = (0, _zapBaseDomSelector.getNext)(childElement2);

	            expect($next).toBe(null);
	        });
	    });

	    describe('getParent', function () {
	        it('getParent(childElement1) should be element1', function () {
	            var $parent = (0, _zapBaseDomSelector.getParent)(childElement1);

	            expect($parent).toBe(element1);
	        });

	        it('getParent(childElement1, \'body\') should be body', function () {
	            var $parent = (0, _zapBaseDomSelector.getParent)(childElement1, 'body');

	            expect($parent).toBe(document.body);
	        });
	    });

	    describe('getParents', function () {
	        it('getParents(childElement1) should return an array of all parent elements', function () {
	            var $parents = (0, _zapBaseDomSelector.getParents)(childElement1);

	            expect($parents).toEqual([element1, document.body, document.documentElement]);
	        });

	        it('getParents(childElement1, \'#element1\') should return an array of all parent elements that match the selector', function () {
	            var $parents = (0, _zapBaseDomSelector.getParents)(childElement1, '#element1');

	            expect($parents).toEqual([element1]);
	        });
	    });
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.$ = $;
	exports.$$ = $$;
	exports.getNext = getNext;
	exports.getParent = getParent;
	exports.getParents = getParents;
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

	/**
	 * @param {Element} target
	 * @returns {Element|null}
	 */
	function getNext(target) {
	    return target.nextElementSibling;
	}

	/**
	 * @param {Element} target
	 * @param {String} [selector]
	 * @returns {Element|null}
	 */
	function getParent(target, selector) {
	    var newTarget = target.parentNode;
	    var parent = null;

	    if (typeof selector !== 'undefined') {
	        var $all = $$(selector);

	        // 9 = DOCUMENT_NODE
	        while (newTarget && newTarget.nodeType !== 9) {
	            // 1 = ELEMENT_NODE
	            if (newTarget.nodeType === 1 && $all.indexOf(newTarget) !== -1) {
	                parent = newTarget;
	                break;
	            }

	            newTarget = newTarget.parentNode;
	        }
	    } else {
	        // 1 = ELEMENT_NODE, 9 = DOCUMENT_NODE
	        if (newTarget && newTarget.nodeType !== 9 && newTarget.nodeType === 1) {
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
	function getParents(target, selector) {
	    var newTarget = target.parentNode;
	    var condition = function condition() {
	        return true;
	    };
	    var parents = [];

	    if (typeof selector !== 'undefined') {
	        (function () {
	            var $all = $$(selector);

	            condition = function (conditionTarget) {
	                return $all.indexOf(conditionTarget) !== -1;
	            };
	        })();
	    }

	    // 9 = DOCUMENT_NODE
	    while (newTarget && newTarget.nodeType !== 9) {
	        // 1 = ELEMENT_NODE
	        if (newTarget.nodeType === 1 && condition(newTarget)) {
	            parents.push(newTarget);
	        }

	        newTarget = newTarget.parentNode;
	    }

	    return parents;
	}

/***/ }
/******/ ]);