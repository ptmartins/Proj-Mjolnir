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
                background-color: var(--grey-800);
                border-radius: var(--radius-m);
                color: var(--white);
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