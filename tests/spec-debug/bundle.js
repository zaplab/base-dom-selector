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

	    var childElement0 = document.createElement('ul');
	    childElement0.className = 'child';

	    var childElement1 = document.createElement('ul');
	    childElement1.className = 'child';

	    var childElement2 = document.createElement('ul');
	    childElement2.className = 'child';

	    beforeEach(function () {
	        element1.appendChild(childElement1);
	        element1.appendChild(childElement2);
	        document.body.appendChild(childElement0);
	        document.body.appendChild(element1);
	    });

	    afterEach(function () {});

	    describe('zap-base-js-object should have the following methods', function () {
	        it('$', function () {
	            expect(_zapBaseDomSelector.$).toEqual(jasmine.any(Function));
	        });

	        it('$$', function () {
	            expect(_zapBaseDomSelector.$$).toEqual(jasmine.any(Function));
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
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

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

/***/ }
/******/ ]);