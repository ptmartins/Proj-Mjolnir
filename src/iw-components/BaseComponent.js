function loadGoogleIcons() {
    if (!document.getElementById('google-material-icons')) {
        const link = document.createElement('link');
        link.id = 'google-material-icons';
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined';
        document.head.appendChild(link);
    }
}

class BaseComponent extends HTMLElement {
 
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        loadGoogleIcons();
    }

    connectedCallback() {
        this.render();
    }

    render() {

    }

    applyStyles(styles) {
        const styleSheet = document.createElement('style');
        styleSheet.textContent = styles;
        this.shadowRoot.appendChild(styleSheet);
    }

    applyMarkup(markup) {
        this.shadowRoot.innerHTML += markup;
    }
}

export default BaseComponent;