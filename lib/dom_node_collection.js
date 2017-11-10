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
