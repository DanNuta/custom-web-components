class ToolTip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
    this._tooltipTextAttribute = "Default text";
    this.attachShadow({ mode: "open" });
    this.template = document.querySelector("#tooltip-template");
    this.shadowRoot.innerHTML = ` <span>SAlutare tuturor</span>`;
  }

  // This method is executed when component is actually render on the DOM (mount), it is a build-in method
  connectedCallback() {
    console.log(this.shadowRoot);
    const textAttributeValue = this.getAttribute("text");

    if (this.hasAttribute("text") && textAttributeValue) {
      this._tooltipTextAttribute = textAttributeValue;
    }

    const divElement = this.shadowRoot.querySelector("span");
    divElement.textContent = this._tooltipTextAttribute;

    divElement.addEventListener("mouseenter", this._showToolTip.bind(this));
    divElement.addEventListener("mouseleave", this._hideToolTip.bind(this));

    this.shadowRoot.appendChild(divElement);
  }

  //   Add _ in front of method for create a private method, call this inside this class
  _showToolTip() {
    this._tooltipContainer = document.createElement("div");
    this._tooltipContainer.textContent = this._tooltipTextAttribute;

    this.shadowRoot.appendChild(this._tooltipContainer);
  }

  _hideToolTip() {
    this.shadowRoot.removeChild(this._tooltipContainer);
  }
}

// 1. The name of the custom component must contain 2 words separated with a dash, and first word is better to be
// some custom name and second word to  be the name of the actual component
// 2. Min 2 words but can have many separated with dashes
customElements.define("my-tooltip", ToolTip);
