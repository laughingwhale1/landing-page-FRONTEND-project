const template = document.createElement('template');
template.innerHTML = ``;

class Site extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({'mode': 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        let content = document.querySelector('slot')
        this.shadowRoot.appendChild(content)
        
        //attaching styles
        const styling = document.createElement('style');
        styling.innerText = '@import url(index.css)';
        this.shadowRoot.appendChild(styling);   
    }
}

window.customElements.define('page-webcomponent-section', Site)