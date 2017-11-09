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

  append() {}

  attr() {}

  addClass() {}

  remove() {}

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
