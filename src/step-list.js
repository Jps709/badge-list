import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class StepList extends LitElement {
  static properties = {
    stepIcon: { type: String },
    stepName: { type: String},
    stepTime: { type: String}
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
    this.stepIcon = 'star-border';
    this.stepName = "Step 1"
    this.stepTime = "2.0 hours"
  }

  render() {
    return html`
      <div class="wrapper">
        <simple-icon icon="${this.stepIcon}"></simple-icon> ${this.stepName} ${this.stepTime}
      </div>
    `;
  }
}

customElements.define('step-list', StepList);