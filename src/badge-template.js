import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class BadgeTemplate extends LitElement {
    static get properties(){
        return {
            badgeName: {type: String},
            badgeIcon: {type: String},
            badgeDescription: {type: String},
            descriptionLink: {type: String},
            linkName: {type: String},
            breakLine: {type: String},
            creatorIcon: {type: String},
            badgeCreator: {type: String},
            compTime:{type: String},
        toggleOpen: {type: Boolean, reflect: true}
        };
    }
    static get styles() {
        return css`

    :host {
        display:block;
    }
    .badge-outline{
        border-width: 4px 4px 4px 16px;
        border-style:solid;
        border-color:#3386FF;
        border-radius: 10px;
        margin: 20px;
        min-height: 50px;
        padding:5px;
        background-color:#CFE5F3;
    }
   
    .icon{
   
        max-height: 50px;
        float: left; 
    }
    /* img {
        max-height: 50px;
        float: left;
    } */
    `;
    }
    constructor(){
        super();
        this.badgeName = "Badge Name";
        this.badgeIcon = new URL('../assets/Cognito.png', import.meta.url).href;
        this.badgeDescription = "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools";
        this.descriptionLink = "Test1";
        this.linkName = "Cognito Info Link";
        this.breakLine = "------------------------------";
        this.creatorIcon = "Test2";
        this.badgeCreator = "Joshua Hantman";
        this.compTime = "1.0 hour";
       
    }
    
    

    toggleEvent(e){
        if(this.shadowRoot.querySelector('details').getAttribute('open') == ""){
            this.toggleOpen = true;
        }
        else{
            this.toggleOpen = false;
        }
    }

    render() {
        return html`
        <div class = "badge-outline">   
            <div class = "badge-info">
                    <div>
                    <img src=${this.badgeIcon} class = "icon" alt ="Badge Icon">
                        ${this.badgeName}
            
                    </div>
                    <br>
                    <details .open="${this.toggleOpen}" @toggle="${this.toggleEvent}">
                        <summary></summary>
                        ${this.badgeDescription}

                            <div class = "link">
                            <a href=${this.descriptionLink}>${this.linkName}</a>
                            </div>

                            <div>
                            ${this.breakLine}
                            </div>  

                            <div class = "creator">
                                Badge Creator: <img src=${this.creatorIcon} alt="Badge Creator Icon"/> ${this.badgeCreator}
                            </div>

                            <div>
                                Approximate time to complete: ${this.compTime}
                            </div>
                    </details>
            </div>
        </div>
        `;
    }
}

customElements.define("badge-template", BadgeTemplate);