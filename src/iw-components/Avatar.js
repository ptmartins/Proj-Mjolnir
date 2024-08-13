import BaseComponent from "./BaseComponent";

class Avatar extends BaseComponent {

    constructor() {
        super();
    }

    observedAttributes() {
        return ['type', 'label'];
    }

    render() {

        this.applyStyles(`
            .avatar {
                background-color: var(--primary-accent);
                border-radius: var(--radius-m);
                color: var(--primary-accent-contrast);
                font-weight: 700;
                padding: .375rem;
            }
        `);

        if(this.hasAttribute('label')) {
            let label = this.getAttribute('label');

            this.applyMarkup(`
                <span class="avatar avatar--label">${label}</span>    
            `)
        }
    }
}

customElements.define('iw-avatar', Avatar);

export default Avatar;