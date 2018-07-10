import {LitElement, html} from '@polymer/lit-element';

class MyElement extends LitElement {

  // Public property API that triggers re-render (synced with attributes)
  static get properties() {
    return {
      foo: String,
      whales: Number
    }
  }

  constructor() {
    super();
    this.foo = 'foo';
    this.addEventListener('click', async (e) => {
      this.whales++;
    await this.renderComplete;
    this.dispatchEvent(new CustomEvent('whales', {detail: {whales: this.whales}}))
  });
  }

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function
  _render({foo, whales}) {
    return html`
      <style>
        :host {
          display: block;
        }
        :host([hidden]) {
          display: none;
        }
      </style>
      <h4>Foo: ${foo}</h4>
      <div>whales: ${'🐳'.repeat(whales)}</div>
      <slot></slot>
    `;
  }

}
customElements.define('my-element', MyElement);