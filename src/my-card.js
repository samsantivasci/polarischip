import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My Cards";
    this.link = '#';
    this.shiny= false;

  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      :host([shiny]) a {
        background-color: blue;
      }a {
        background-color: pink;
        color: black;
        font-size: 24px;
        padding: 16px;
        margin: 8px;
      }
    `


  }
  render() {
    return html`<a href= "${this.link}">${this.title}</a>`;
  }

  static get properties() {
    return {
      title: { type: String },
      link: {type: String }, 
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
