import BaseComponent from "./BaseComponent";

class Date extends BaseComponent {

    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['date', 'label'];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if(name === 'date') {
            if(this.hasAttribute('label')) {
                this.applyMarkup(`
                    <p class="dateTime"> 
                        <span class="label"> ${this.getAttribute('label')} </span>
                        <time dateTime="${newVal}" >${newVal}</time> 
                    </p>  
                `)
            } else {
                this.applyMarkup(`
                    <p class="dateTime">
                        <span class="material-symbols-outlined"> calendar_month </span>
                        <time dateTime="${newVal}" >${newVal}</time>    
                    </p>
                `)
            }
        }
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
                font-size: 1.3rem; /* Adjust size as needed */
            }
        `)


    }
}

customElements.define('iw-date', Date);

export default Date;