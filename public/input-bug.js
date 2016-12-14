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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(79)
	var __weex_style__ = __webpack_require__(81)
	var __weex_script__ = __webpack_require__(80)

	__weex_define__('@weex-component/56535233bf40fe7c9f1a063d34d8b7f6', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/56535233bf40fe7c9f1a063d34d8b7f6',undefined,undefined)

/***/ },

/***/ 79:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "input",
	      "classList": [
	        "input"
	      ],
	      "id": "input1",
	      "events": {
	        "input": "oninput"
	      },
	      "attr": {
	        "type": "text",
	        "name": "",
	        "value": ""
	      }
	    },
	    {
	      "type": "input",
	      "classList": [
	        "input"
	      ],
	      "id": "input2",
	      "attr": {
	        "type": "text",
	        "name": "",
	        "value": ""
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "btn"
	      ],
	      "events": {
	        "click": "show"
	      },
	      "attr": {
	        "value": "get input value"
	      }
	    }
	  ]
	}

/***/ },

/***/ 80:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var modal = __weex_require__('@weex-module/modal');
	module.exports = {
	  methods: {
	    oninput: function oninput(e) {},
	    show: function show() {
	      modal.alert({
	        message: '\n            input1: ' + this.$el('input1').attr.value + '\n            input2: ' + this.$el('input2').attr.value + '\n          ',
	        okTitle: 'OK'
	      });
	      console.log('\n          input1: ' + this.$el('input1').attr.value + '\n          input2: ' + this.$el('input2').attr.value + '\n        ');
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },

/***/ 81:
/***/ function(module, exports) {

	module.exports = {
	  "input": {
	    "borderStyle": "solid",
	    "borderWidth": 1,
	    "borderColor": "#cccccc",
	    "margin": 10,
	    "padding": 10
	  },
	  "btn": {
	    "fontSize": 14,
	    "width": 200,
	    "backgroundColor": "rgb(0,199,255)",
	    "textAlign": "center",
	    "padding": 10,
	    "borderRadius": 10,
	    "color": "#ffffff"
	  }
	}

/***/ }

/******/ });