const DomNodeCollection = require("./dom_node_collection");


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
