import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class BadgeTemplate extends LitElement {
    static get properties(){
        return {
        badgeName: { type: String},
        description: {type: String},
        badgeIcon: {type: String},
        };
    }
    static get styles() {
        return css`

    :host {
        display:block;
    }
    .badge-outline{
        border-width: 4px 4px 4px 20px;
        border-style:solid;
        border-color:#3386FF;
        border-radius: 10px;
        margin: 20px;
        min-height: 45px;
        padding:5px;
        background-color:#33C8FF;
    }
    .details {
        float:  right;
    }
    `;
    }
    constructor(){
        super();
        this.badgeName = "Badge Name";
        this.badgeIcon = new URL('../assets/Cognito.png', import.meta.url).href;
        this.description = "Details";
        //this.badge = [];
        //this.updateBadge();
    }
    
    //  updateBadge(){
    //     const address = new URL('../api/badge.js', import.meta.url).href
    //   fetch(address).then((response) => {
    //     if (response.ok) {
    //         return response.json()
    //     }
    //     return [];
    //    })
    //    .then((data) => {
    //     this.badge = data;
    //    });
    // }
    render() {
        return html`
        <div class = "badge-outline">   
            <div class = "badge-info">
                <div class = "icon">
                <img src=${this.badgeIcon}>
                </div>
                    <div class = "name">
                        ${this.badgeName}
                    </div>
                    <details class="details">
                        <summary>${this.description}</summary>
                    <div>
                        <slot></slot>
                    </div>
                    </details>
            </div>
        </div>
        `;
    }
}

customElements.define("badge-template", BadgeTemplate);