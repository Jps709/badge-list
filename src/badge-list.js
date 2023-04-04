import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "./badge-template.js";
import "./search-bar";



class BadgeList extends LitElement {
  static properties = {
    
  }

  static styles = css`
   
  `;

constructor(){
  super();
  this.badgeName = "Badge Name";
  this.badgeIcon = new URL('../assets/Cognito.png', import.meta.url).href;
  this.description = "Details";
  this.info = "Info";
  }

  render() {
    return html`
   <div class ="wrapper">
    
   </div>
    `;
}
}

customElements.define('badge-list', BadgeList);