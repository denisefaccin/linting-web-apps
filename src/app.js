import { CustomElement } from './custom-element.js';

fetch('./app.html')
  .then((stream) => stream.text())
  .then((text) => define(text));

function define(html) {
  class MainApp extends CustomElement {
  }
  customElements.define('main-app', MainApp);
}
