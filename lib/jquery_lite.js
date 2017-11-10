/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const DomNodeCollection = __webpack_require__(1);


// document.addEventListener("DOMContentLoaded", function(){
//   // Handler when the DOM is fully loaded
// });


window.$l = (arg) => {
  // document.addEventListener("DOMContentLoaded", function () {
  //
  // });
  // if (typeof arg === 'function') {
  //   if (document.readyState === 'complete') {
  //
  //   }
  // }
  if (typeof arg === 'object') {
    if (arg instanceof HTMLElement) {
      return new DomNodeCollection([arg]);
    }
  }
  else if (typeof arg === 'string') {
    const stringElements = getNode(arg);
  }
}

getNode = (selector) => {
  elementList = document.querySelectorAll(selector);
  nodeListArray = Array.from(elementList);
  return new DomNodeCollection(nodeListArray);
};



// document.addEventListener('DOMContentLoaded', function() {
//
//     // this is a workaround - querySelectorAll returns a non-iterable NodeList instead of an array
//     // so take Array.forEach() and pass the NodeList into it so we can iterate!
//     [].forEach.call(document.querySelectorAll('a'), function(el) {
//
//         // add the click handler to each link
//         el.addEventListener('click', function(e) {
//             e.preventDefault();
//
//             // log the href attribute
//             console.log(el.getAttribute('href');
//         });
// });


/***/ }),
/* 1 */
/***/ (function(module, exports) {

class DomNodeCollection {
  constructor(elements) {
    this.elements = elements;
  }

  on(event, callback) {
    this.each((element) => {
      element.addEventListener(event, callback);
      element[event] = callback;
    });
  }

  off(event) {
    this.each((element) => {
      let listener = element[event]
      element.removeEventListener(event, listener);
      element.removeAttribute(event);
    });
  }
  // prefered way to do on and off functions
  // ------------------------------------------------------
  // on(eventName, callback) {
  //   this.each((element) => {
  //     element.addEventListener(eventName, callback);
  //     const eventKey = `jqliteEvents-${eventName}`;
  //     if (typeof element[eventKey] === "undefined") {
  //       element[eventKey] = [];
  //     }
  //     element[eventKey].push(callback);
  //   });
  // }


  // off(eventName) {
  //   this.each((element) => {
  //     const eventKey = `jqliteEvents-${eventName}`;
  //     if (element[eventKey]) {
  //       element[eventKey].forEach((callback) => {
  //         element.removeEventListener(eventName, callback);
  //       });
  //     }
  //     element[eventKey] = [];
  //   });
  // }

  // --------------------------------------------------------

  each(element) {
    this.elements.forEach(element);
  }

  html(html) {
    if (typeof html === 'String') {
      this.each((element) => {
        element.innerHTML = html;
      });
    } else if (this.elements.length > 0) {
      return this.elements[0].innerHTML;
    }
  }

  empty() {
    this.html('');
  }

  append(children) {
    if (typeof children === 'String') {
      this.each((element) => {
        element.innerHTML += children;
      });
    }
  }

  attr(key, value) {
    if (typeof val === 'string') {
      this.each(element => element.setAttribute(key, value));
    } else {
      return this.elements[0].getAttribute(key);
    }
  }

  addClass(newClass) {
    this.each(element => element.classList.add(newClass));
  }

  removeClass(oldClass) {
    this.each(element => element.classList.remove(oldClass));
  }

  children() {
    let childElements = [];
    this.each((element) => {
      const childElementList = element.children;
      childElements += Array.from(childElementList);
    })
    return new DomNodeCollection(childElements);
  }

  parent() {
    //Get back to later
    const parentElements = [];
    this.each(({ parentNode }) => {
      if (!parentNode.visited) {
        parentElements.push(parentElement);
        parentElement.visited = true;
      }
    });

    parentElements.forEach((element) => {
      element.visited = false;
    });
    return new DomNodeCollection(parentElements);
  }

  find(selector) {
    let foundElements = [];
    this.each((element) => {
      const elementList = element.querySelectorAll(selector);
      foundElements += Array.from(elementList);
    })
    return new DomNodeCollection(foundElements);
  }

  remove() {
    this.each(element => element.parentNode.removeChild(element));
  }
};


module.exports = DomNodeCollection;


/***/ })
/******/ ]);
//# sourceMappingURL=jquery_lite.js.map