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
    this.title = "";
    this.buttonTitle ="";
    this.image = "#";
    this.link = '#';
    

  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      div {
        border: solid black 4px;
        font-size: 16px;
        text-decoration: none;
        margin: 24px;
        border-radius: 24px;
        max-width: 200px;
        padding: 16px;

      }
    
      a {
        background-color: pink;
        color: black;
        font-size: 16px;
        border-style: solid;
        padding: 8px 16px ;
        margin: 32px ;
        text-decoration: none;
      }
      a:hover, 
      a:focus{
        color:white;
      }
      img{
        height:auto;
        max-width: 200px;
        margin:auto; 
      }
    `


  }
  render() {
        return html`<div><img src='${this.image}'><h3>${this.title}</h3><p>${this.text}</p><a href='${this.link}'>${this.buttonTitle}</a></div>`
  }

  static get properties() {
    return {
      title: { type: String },
      link: {type: String }, 
      image: {type: String},
      text: {type: String},
      buttonTitle: {type: String},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
