import BaseComponent from "./BaseComponent";

class ListItem extends BaseComponent {

    constructor() {
        super();
    }

    render() {

        this.applyStyles(`

            .listItem {
                border: 1px solid var(--grey-100);
                border-radius: var(--radius-m);
                display: grid;
                gap: .75rem;
                grid-template-columns: 1fr 1fr minmax(50px, min-content) 40px;
                grid-template-rows: repeat(2, min-content);
                align-items: center;
                padding: .75rem;
            } 

            ::slotted(h2) {
                grid-area: 1 / 1 / 2 / 3;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                width: 100%;
            }

            ::slotted(iw-date) {
                grid-area: 2 / 1 / -1 / 3;
            }


            ::slotted(iw-avatar) {
                grid-area: 1 / 3 / 2 / 4;
                justify-self: center;
            }

            ::slotted(iw-context-menu) {
                grid-area: 1 / 4 / 2 / -1;
                justify-self: center;
            }

            @media (min-width: 640px) {
            
            }

            @media (min-width: 768px) {
            
            }

            @media (min-width: 1024px) {

                body {
                    color: red;
                }

                .listItem {
                    grid-template-columns: 1fr minmax(150px, max-content) minmax(50px, min-content) 40px; 
                    grid-template-rows: 1fr;
                }

                ::slotted(iw-date) {
                    grid-area: 1 / 2 / -1 / 3;
                }
            }

            @media screen and (width >= 1280px) {
            
            }

            @media screen and (width >= 1536px) {
            
            }


        `)

        this.applyMarkup(`
            <div class="listItem">
                <slot></slot>
            </div>
        `);
    }
}

customElements.define('iw-list-item', ListItem);

export default ListItem;