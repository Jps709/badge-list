import { LitElement, html, css } from 'lit';
import "./badge-template.js";
import "./search-bar.js";



export class BadgeList extends LitElement {
   static get tag() {
      return 'badge-list';
   }
    static get properties() {
    return {
        badges: {type: Array},
    }
  }

  
  static get styles() {
    return css`
   :host {
 
    
   }
   .wrapper {
    border: overscroll-behavior-block;
   display: flex;
   
   }
   .item{
 
   }
  `;
  }

  constructor(){
    super();
   this.badges = [];
   this.updateBadge();
    }

    updateBadge() {
      const address = '../api/badge-data';
      fetch(address).then((response) => {
          if (response.ok) {
              return response.json()
          }
          return [];
      })
      .then((data) => {
          this.badges = data;
      });
    }

  render() {
    return html`
   <div class = "wrapper">
    ${this.badges.map(badge => html`
    <div class = "item">
        <badge-template
        badgeName="${badge.badgeName}"
        icon="${badge.badgeIcon}"
        badgeDescription="${badge.badgeDescription}"
        descriptionLink="${badge.descriptionLink}"
        linkName="${badge.linkName}" 
        breakLine="${badge.breakLine}"
        creatorIcon="${badge.creatorIcon}"
        badgeCreator="${badge.badgeCreator}"
        compTime="${badge.compTime}"></badge-template>
    </div>
    `)}
   </div>
    `;
}
}

customElements.define(BadgeList.tag, BadgeList);