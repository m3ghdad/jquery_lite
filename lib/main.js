window.$l = (arg) => {
  if (typeof arg === 'string') {
    getNode(arg);
  }
}

getNode = (selector) => {
  elementList = document.querySelectorAll(selector);
  nodeListArray = Array.from(elementList);
}
