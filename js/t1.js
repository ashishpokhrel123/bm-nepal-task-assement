class DOMLibrary {
  constructor() {
    this.elementFactory = new DOMElementFactory();
  }

  changeClassName(element, className) {
    element.className = className;
  }

  getDataSets(element) {
    return element.dataset;
  }

  injectElement(parentElement, elementType, attr) {
    const newElement = this.elementFactory.create(elementType, attr);
    parentElement.appendChild(newElement);
  }

  ajaxRequest(url, method, callback) {
    const api = new XMLHttpRequest();
    api.open(method, url);
    api.onload = () => {
      if (api.status === 200) {
        callback(api.response);
      } else {
        console.log("Error: " + api.status);
      }
    };
    api.send();
  }

  getRequest(url, callback) {
    return new Promise((resolve, reject) => {
      const api = new XMLHttpRequest();
      api.open("GET", url);
      api.onload = () => {
        if (api.status === 200) {
          resolve(api.response);
        } else {
          reject(api.status);
        }
      };
      api.send();
    });
  }
}

class DOMElementFactory {
  constructor() {}

  create(elementType, attr) {
    const element = document.createElement(elementType);
    if (attr) {
      Object.entries(attr).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    }
    return element;
  }
}

const library = new DOMLibrary();

library.changeClassName(document.getElementById("checkBoxId"), "classBoxClass");

const datasets = library.getDataSets(document.getElementById("checkBoxId"));
console.log(datasets);

const parentElement = document.getElementById("parentId");
const attr = {
  id: "checkBoxId",
  class: "classBoxClass",
  text: "text",
};

library.injectElement(parentElement, "div", attr);

library.ajaxRequest("https://fakestoreapi.com/products", (response) => {
  console.log(response);
});

const inputElement = document.getElementById("inputValues");
const value = library.getValue(inputElement);
console.log(value);

library.setValue(inputElement, "inputValues");
