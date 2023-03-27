import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

class BadgeTemplate extends LitElement {
    static properties = {
        badgeName: { type: String},
    
    }
    static styles = css`
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
    `;
    constructor(){
        super();
        this.badgeName = "Badge Name";
        this.badgeIcon = "";
    }
    render() {
        return html`
        <div class = "badge-outline">
            <div class = "badge-info">
                <div class = "icon">
                    <simple-icon icon="${this.badgeIcon}"></simple-icon>
                </div>
                    <div class = "name">
                        ${this.badgeName}
                    </div>
                   
            </div>
        </div>
        `;
    }
}

customElements.define("badge-template", BadgeTemplate);