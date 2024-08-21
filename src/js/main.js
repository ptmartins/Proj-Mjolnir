(function() {
    let DOM = {},
        date = new Date().toLocaleDateString();

    /**
     * Cache DOM elements
     */
    let cacheDOM = () => {
    DOM.root = document.documentElement;
    DOM.themes = document.querySelectorAll('.btn--theme');
    DOM.dateEls = document.querySelectorAll('iw-date');
    };

    /**
     * Clear all theme buttons
     */
    const clearButtons = () => {
        DOM.themes.forEach(btn => {
            if(btn.classList.contains('active')) {
                btn.classList.remove('active');
            }
        })
    }

    /**
     * Switch theme
     * 
     * @param {*} ev 
     * @returns 
     */
    const switchTheme = ev => {
        let theme = ev.target.getAttribute('data-theme');

        if(DOM.root.getAttribute('data-theme') !== theme) {
            clearButtons();
            DOM.root.setAttribute('data-theme', theme);
            ev.target.classList.add('active');
        } else {
            return;
        }
    }

    /**
     * Setup events
     */
    let setupEvents = () => {
        DOM.themes.forEach(btn => btn.addEventListener('click', switchTheme));
    }

    let loadTemplate = (templateId, elementId) => {
        debugger;
        const template = document.getElementById(templateId);
        const content = template.content.cloneNode(true);
        document.getElementById(elementId).appendChild(content);
    }

    /**
     * Kick off logic
     */
    let init = () => {
        cacheDOM();
        loadTemplate('header-template', 'header');
        loadTemplate('footer-template', 'footer');
        DOM.dateEls.forEach(el => el.setAttribute('date', date));
        setupEvents();
    }

    window.addEventListener('DOMContentLoaded', init);
})();