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
           // creatorIcon: {type: String},
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
      border: 1px solid #3e98d3;
      border-left: 15px solid #3e98d3;
      border-radius: 5px;
      width: 1000px;
      text-align: left;
      margin: auto;
      margin-bottom: 5px;
    }
   
    .icon{
        max-height: 40px;
      padding-left: 10px;
      vertical-align: middle;
      padding-top: 2px;
      padding-bottom: 2px;
      max-width: 40px;
    }
    .exterior{
      list-style: none;
      background-color: #cfe6f4;
      border-radius: 0px 5px 0px 0px;
      min-height:40px;
    }
    .interior{
        padding: 24px;
    }
    .link{
        padding-top: 5px;
    }
    .creator{
        padding-bottom: 10px;
    }
    .break{
        padding-top: 15px;
        padding-bottom: 5px;
    }
    .stepDiv{
        padding-top: 10px;
    }
    .sIcon{
        float:right;
    }
    .cIcon{
        max-height: 40px;
        max-width: 40px;
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
       // this.creatorIcon = 'https://badgesapp.psu.edu/uploads/user/image/23804/small_image_Joshua_pittsburgh2021.png';
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
                    <details .open="${this.toggleOpen}" @toggle="${this.toggleEvent}">
                        <summary class="exterior"><img src="${this.badgeIcon}" class = "icon" alt ="Badge Icon"/>  ${this.badgeName} <simple-icon class="sIcon" icon="expand-more"></simple-icon></summary>
                        <div class="interior">
                        ${this.badgeDescription}

                            <div class = "link">
                            <a href=${this.descriptionLink}>${this.linkName}</a>
                            </div>

                            <div class="break">
                            ${this.breakLine}
                            </div>  

                            <div class = "creator">
                                Badge Creator: <!--<img src="${this.creatorIcon}" alt="Badge Creator Icon" class="cIcon"/> --> <simple-icon class ="cIcon" icon="supervisor-account"></simple-icon>  ${this.badgeCreator}
                            </div>

                            <div>
                                Approximate time to complete: ${this.compTime}
                            </div>
                            <div class="stepDiv">
                            Steps to Earn this Badge
                            </div>
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