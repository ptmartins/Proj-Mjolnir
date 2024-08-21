import BaseComponent from "./BaseComponent";

class IW_Date extends BaseComponent {

    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['date', 'label'];
    }

    render() {

        this.applyStyles(`
            .dateTime {
                align-items: center;
                display: flex;
                gap: .375rem;
            }

            .label,
            .calendarIcon {
                font-weight: 700;
            }

            .material-symbols-outlined {
                font-family: 'Material Symbols Outlined';
                font-size: 1.3rem; 
            }
        `);


        let date = new Date().toLocaleDateString();

        if(this.hasAttribute('label')) {
            this.applyMarkup(`
                <p class="dateTime"> 
                    <span class="label"> ${this.getAttribute('label')} </span>
                    <time dateTime="${ date }" >${ date }</time> 
                </p>  
            `)
        } else {
            this.applyMarkup(`
                <p class="dateTime">
                    <span class="material-symbols-outlined"> calendar_month </span>
                    <time dateTime="${ date }" >${ date }</time>    
                </p>
            `)
        }


    }
}

customElements.define('iw-date', IW_Date);

export default IW_Date;