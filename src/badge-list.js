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
    border: 2px solid overscroll-behavior-block;
  
   
   }
   .item{
 
   }
  `;
  }

  constructor(){
    super();
   this.badges = [];
   this.getSearchResults().then((results) => {
    this.badges = results;
   });
    }

    async getSearchResults(value = '') {
      const address = `/api/badge-data?search=${value}`;
      const results = await fetch(address).then((response) => {
          if (response.ok) {
              return response.json()
          }
          return [];
      })
      .then((data) => {
          return data;
      });
      return results;
    }

    async _handleSearchEvent(e) {
      const term = e.detail.value;
      this.badges = await this.getSearchResults(term);
    }

  render() {
    return html`
    <search-bar @value-changed="${this._handleSearchEvent}">></search-bar>
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