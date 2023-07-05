/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 927:
/***/ (() => {

const button = document.getElementById("toggleButton");
let container = document.querySelector(".container");
let isVisible = false;
let popover = null;
button.addEventListener("click", e => {
  e.preventDefault();
  if (!isVisible) {
    createPopover();
  } else {
    removePopover();
  }
});
function createPopover() {
  popover = document.createElement("div");
  popover.classList.add("popover");
  popover.innerHTML = `
    <div class="popover-title"><p>Popover Title</p></div>
    <div class="popover-content"><p>And here's some amazing content. It's very engaging. Right?</p></div>
  `;
  container.appendChild(popover);
  calculatePopoverPosition();
  isVisible = true;
}
function removePopover() {
  popover.remove();
  isVisible = false;
}
function calculatePopoverPosition() {
  const buttonRect = button.getBoundingClientRect();
  const popoverWidth = popover.offsetWidth;
  const popoverHeight = popover.offsetHeight;
  console.log('popoverheight: ' + popoverHeight);
  const popoverTop = buttonRect.top - popoverHeight - 10; // регулировка для отступа вверх от кнопки
  const popoverLeft = buttonRect.left + buttonRect.width / 2 - popoverWidth / 2;
  popover.style.top = popoverTop + "px";
  popover.style.left = popoverLeft + "px";
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(927);
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_0__);


})();

/******/ })()
;