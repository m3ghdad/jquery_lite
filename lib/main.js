const DomNodeCollection = require("./dom_node_collection");

window.$l = (arg) => {
  // const domNode = new DomNodeCollection
  if (typeof arg === HTMLElement) {
    // if arg === instance of HTMLElement
    htmlElements = [];
    htmlElements.push(arg);
    new DomNodeCollection (htmlElements);
  }
  else if (typeof arg === 'string') {
    const stringElements = getNode(arg);
    new DomNodeCollection (stringElements)
  }
}

getNode = (selector) => {
  elementList = document.querySelectorAll(selector);
  nodeListArray = Array.from(elementList);
}
