import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

export class BadgeTemplate extends LitElement {
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
            toggleOpen: {type: Boolean, reflect: true},
            stepIcon: { type: String },
            stepName: { type: String},
            stepTime: { type: String}
        };
    }
    static get styles() {
        return css`

    :host {
        display:block;
    }
    .badge-outline{
   border-width: 2px 2px 2px 16px;
   border-style:solid;
   border-color:#3386FF;
   border-radius: 10px;
   margin: 15px;
   min-height: 50px;
   padding: 5px;
   background-color:#CFE5F3;
    }
   
    .icon{
   
        height: 50px;
        width: 50px;
        float: left; 
        margin-left: 10px;
    }
    .interior{
      list-style: none;
      
      
    }
    `;
    }
    constructor(){
        super();
        this.badgeName = "Badge Name";
        this.badgeIcon = 'https://www.drupal.org/files/styles/grid-3-2x/public/project-images/553dbabbd287c26ca83aef42.jpg?itok=ruAqqobg';
        this.badgeDescription = "Learn the basics of how Amazon Cognito works, and how you can use it to create User Sign In, Sign In, Access Control, User Pools, and Identity Pools";
        this.descriptionLink = "Test1";
        this.linkName = "Cognito Info Link";
        this.breakLine = "------------------------------";
        this.creatorIcon = "Test2";
        this.badgeCreator = "Joshua Hantman";
        this.compTime = "1.0 hour";
        this.toggleOpen = false;
      

        this.stepIcon = 'star-border';
        this.stepName = "Step 1"
        this.stepTime = "3.0 hours"
    }
    
    // updateSteps(badgeName){
    //     const address = '../api/step-data';
    //     fetch(address).then((response) => {
    //         if(response.ok){
    //             return response.json();
    //         }
    //         return [];
    //     })
    //     .then((data) => {
    //         let filterSteps = data.filter(item => {
    //           return item.tag === badgeName});
    //         this.steps=filterSteps; 
    //     });
    //   }

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
                    <!-- <div> -->
                    
            
                    <!-- </div>
                    <br> -->
                    <details  .open="${this.toggleOpen}" @toggle="${this.toggleEvent}">
                        <summary class = "interior"><img src="${this.badgeIcon}" class = "icon" alt ="Badge Icon">  ${this.badgeName}</summary>
                        <div class = interior>
                        ${this.badgeDescription}

                            <div class = "link">
                            <a href=${this.descriptionLink}>${this.linkName}</a>
                            </div>

                            <div>
                            ${this.breakLine}
                            </div>  

                            <div class = "creator">
                                Badge Creator: <img src="${this.creatorIcon}" alt="Badge Creator Icon"/> ${this.badgeCreator}
                            </div>

                            <div>
                                Approximate time to complete: ${this.compTime}
                            </div>
                            Steps to Earn this Badge
                            <div>
                           ${this.stepIcon} ${this.stepName} ${this.stepTime}
                            </div>
                        </div>
                    </details>
            </div>
        </div>
        `;
    }
}

customElements.define("badge-template", BadgeTemplate);