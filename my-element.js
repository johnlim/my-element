import {LitElement, html} from '@polymer/lit-element';
import 'auth0-element/auth0-auth'

class MyElement extends LitElement {

  // Public property API that triggers re-render (synced with attributes)
  static get properties() {
    return {
      foo: String,
      whales: Number,
      auth0Options: Object
    }
  }

  constructor() {
    super();
    this.auth0Options = {
      auth: {
        scope: 'openid email',
        redirectUri: window.location.origin + '/auth0-element/components/auth0-element/demo/',
        responseType: 'token',
        connection: 'Username-Password-Authentication',

      },
      allowedConnections: ['Username-Password-Authentication'],
      closable: false
    };
    this.foo = 'foo';
    this.addEventListener('click', async (e) => {
      this.whales++;
    await this.renderComplete;
    this.dispatchEvent(new CustomEvent('whales', {detail: {whales: this.whales}}))
  });
  }

  // Render method should return a `TemplateResult` using the provided lit-html `html` tag function
  _render() {
    return html`
      <auth0-auth id="auth0" 
                  client-id="LP1BxaYQm2NQTZG64MQqHmI2xxDiRMaf" 
                  domain="johnlim.au.auth0.com" options="${this.auth0Options}" 
                  logout-redirect-to="${this.auth0Options.redirectUri}" 
                  user-profile="{{user}}" 
                  id-token="{{idToken}}" 
                  query-params="{{params}}" jwt-manager="">
      </auth0-auth>
      <style>
        :host {
          display: block;
        }
        :host([hidden]) {
          display: none;
        }
      </style>
      <h4>Foo: ${this.foo}</h4>
      <div>whales: ${'🐳'.repeat(this.whales)}</div>
      <slot></slot>
    `;
  }

}
customElements.define('my-element', MyElement);