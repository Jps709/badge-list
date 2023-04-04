import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "./badge-template.js";
import "./search-bar.js";



export class BadgeList extends LitElement {
   static get tag(){
return 'badgr-list';
   }
    static get properties() {
    return {
        badges: {type: Array}
    }
  }

  constructor(){
    super();
   this.badges = [];
   this.updateBadge();
    }

  updateBadge(){
    const address = new URL('../api/badge-data.js', import.meta.url).href
  fetch(address).then((response) => {
    if (response.ok) {
        return response.json()
    }
    return [];
   })
   .then((data) => {
    this.badge = data;
   });
}
  static get style() {
    return css`
   :host {
    display: block;
    
   }
  `;
  }


  render() {
    return html`
   <div class ="wrapper">
    ${this.badges.map(badge => html`
    <div class = "item">
        <badge-template
        badgeName="${badge.badgeName}"
        icon="${badge.badgeIcon}"
        badgeDescription="${badge.badgeDescription}"
        descriptionLink="${badge.descriptionLink}"
        linkNick="${badge.linkName}" 
        breakLine="${badge.breakLine}"
        creatorIcon="${badge.creatorIcon}"
        badgeCreator="${badge.badgeCreator}"
        compTime="${badge.compTime}" >
        </badge-template>
    </div>
    `)}
   </div>
    `;
}
}

customElements.define('badge-list', BadgeList);