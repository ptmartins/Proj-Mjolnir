import BaseComponent from './BaseComponent';

class IW_Button extends BaseComponent {

  constructor() {
    super();
    this.classNames = [];
  }

  static observedAttributes() {
    return ['type'];
  }

  getClassNames() {
    if(this.hasAttribute('type') && this.getAttribute('type').length > 0) {
      switch(this.getAttribute('type')) {
        case 'main':
          this.classNames.push('btn--main');
          break;
        case 'kill':
          this.classNames.push('btn--kill');
          break;
        default: 
          break;
      }
    }
  }

  render() {
    this.getClassNames();

    this.applyStyles(`

      .btn {
        align-items: center;
        background-color: var(--neutral-200);
        border: var(--btn-border);
        border-radius: var(--btn-radius);
        cursor: pointer;
        display: flex;
        font-size: 16px;
        gap: .375rem;
        padding: .75rem 1rem;
        transition: var(--default-transition);

        &:hover {
          background-color: var(--neutral-300);
        }
      
        &.btn--main {
            background-color: var(--accent-600);
            color: var(--white);

            &:hover {
                background-color: var(--accent-700);
            }
        }

        &.btn--kill {
            background-color: var(--red-500);
            color: var(--white);

            &:hover {
                background-color: var(--red-600);
            }
        }
      }

      ::slotted(i) {
        font-size: 1.1rem !important;
      }

    `);

    this.applyMarkup(`
      <button class="btn ${this.classNames}">
        <slot></slot>
      </button>
    `);
  }
}

customElements.define('iw-button', IW_Button);

export default IW_Button;