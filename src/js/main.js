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

    /**
     * Kick off logic
     */
    let init = () => {
        cacheDOM();
        DOM.dateEls.forEach(el => el.setAttribute('date', date));
        setupEvents();
    }

    window.addEventListener('DOMContentLoaded', init);
})();