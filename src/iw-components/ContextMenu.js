import BaseComponent from "./BaseComponent";

class ContextMenu extends BaseComponent {

    constructor() {
        super();
    }

    render() {

        this.applyStyles(`

            .contextMenu {
                cursor: pointer;
            }

            .material-symbols-outlined {
                font-family: 'Material Symbols Outlined';
                font-size: 1.3rem; /* Adjust size as needed */
            }
        `)

        this.applyMarkup(`
            <span class="material-symbols-outlined contextMenu">more_vert</span> 
        `);
    }
}

customElements.define('iw-context-menu', ContextMenu);

export default ContextMenu;