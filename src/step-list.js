import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "./badge-template.js";
import "./search-bar.js";

class StepList extends LitElement {
  static properties = {
  
    stepIcon: {type: String},
    stepName: {type: String},
    stepTime: {type: String}
  }

  static styles = css`
    :host {
      display: block;
     
    }
    .wrapper {
      border-top: 1px solid #e1e1e1;
      background-color: #f9f9f9;
    }
  `;

  constructor() {
    super();
    this.stepIcon = "device:devices";
    this.stepName = "Step Name";
    this.stepTime = "1.0 hours";
  }

  

  render() {
    return html`
    <div class = "item">
      <div class="wrapper">
      <simple-icon icon="${this.stepIcon}"></simple-icon> ${this.stepName} ${this.stepTime} </div>
  </div>
    `;
  }
}

customElements.define('step-list', StepList);