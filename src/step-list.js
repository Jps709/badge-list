import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "./badge-template.js";
import "./search-bar.js";

class StepList extends LitElement {
  static properties = {
  
    steps: {type: Array }
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
    this.steps = []
        this.updateSteps()
  }

  updateSteps(badgeName){
    const address = '../api/step-data';
    fetch(address).then((response) => {
        if(response.ok){
            return response.json();
        }
        return [];
    })
    .then((data) => {
        let filterSteps = data.filter(item => {
          return item.tag === badgeName});
        this.steps=filterSteps; 
    });
  }

  render() {
    return html`
    <div class = "item">
      <div class="wrapper">
      ${this.steps.map(step => html`
        <badge-template stepIcon="${step.stepIcon}" stepName="${step.stepName}" stepTime="${step.stepTime}"></badge-template>
         `)} </div>
  </div>
    `;
  }
}

customElements.define('step-list', StepList);