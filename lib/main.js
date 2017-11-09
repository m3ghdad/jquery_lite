const DomNodeCollection = require("./dom_node_collection");

window.$l = (arg) => {
  // const domNode = new DomNodeCollection
  if (typeof arg === 'object') {
    // if arg === instance of HTMLElement
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
