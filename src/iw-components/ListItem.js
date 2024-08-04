import BaseComponent from "./BaseComponent";

class ListItem extends BaseComponent {

    constructor() {
        super();
    }

    render() {

        this.applyStyles(`
            .listItem {
                border: 1px solid var(--grey-100);
                border-radius: var(--radius);
                padding: .75rem;
            }      
        `)

        this.applyMarkup(`
            <div class="listItem">
                <slot name="title" class="title"></slot>
                <slot name="owner" class="owner"></slot>
            </div>
        `);
    }
}

customElements.define('iw-list-item', ListItem);

export default ListItem;