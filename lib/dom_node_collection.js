class DomNodeCollection {
  constructor(elements) {
    this.elements = elements;
  }

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

  children() {}

  parent() {}

  find() {}

  remove() {}


};



//   elements.forEach( (element)=> {
//     element = HTMLElement;
//   })
//   // for (let i = 0; i < elements.length; i++) {
//   //   element = elements[i];
//   //   element = HTMLElement;
//   // }
// }

module.exports = DomNodeCollection;
