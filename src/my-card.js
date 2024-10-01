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
    this.fancy = false;
    

  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }
      :host([fancy]) {
        display: block;
        background-color: lightskyblue;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
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
      details summary {
       text-align: left;
     font-size: 20px;
      padding: 32px 0;
  }

  details[open] summary {
    font-weight: bold;
  }
  
  details div {
    border: 2px solid black;
    text-align: left;
    padding: 32px;
    height: 70px;
    overflow: auto;
  }
      a {
        background-color: pink;
        color: black;
        font-size: 16px;
        border-style: solid;
        padding: 8px 16px ;
        margin: 32px;
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
        return html`<div><img src='${this.image}'>
        <h3>${this.title}</h3>
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
        <div>
       <slot><true-false-question question="HAX is a game changer.">
<input type="checkbox" value="True" correct="correct" role="textbox">
<input type="checkbox" value="False">
</true-false-question></slot>
        </div>
      </details>
      <a href='${this.link}'>${this.buttonTitle}</a>
      </div>`
       
  
      }
      
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  static get properties() {
    return {
      title: { type: String },
      link: {type: String }, 
      image: {type: String},
      text: {type: String},
      buttonTitle: {type: String},
      fancy: {type: Boolean, reflect: true },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
