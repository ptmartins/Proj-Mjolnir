import BaseComponent from "./BaseComponent";

class Avatar extends BaseComponent {

    constructor() {
        super();
        this.classes = [];
        this.getClasses();
    }

    getClasses() {
        if(this.hasAttribute('type') && this.getAttribute('type') === 'round') {
            this.classes.push('avatar--round')
        }
    }

    render() {

        this.applyStyles(`
            .avatar {
                background-color: var(--primary-accent);
                border-radius: var(--radius-m);
                color: var(--primary-accent-contrast);
                font-weight: 700;
                padding: .75rem;  
            }

            .avatar--round {
                border-radius: 50%;
            }
        `);

        if(this.hasAttribute('label')) {
            let label = this.getAttribute('label');

            this.applyMarkup(`
                <span class="avatar ${this.classes}">${label}</span>    
            `)
        }
    }
}

customElements.define('iw-avatar', Avatar);

export default Avatar;