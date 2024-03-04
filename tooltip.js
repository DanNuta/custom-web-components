class ToolTip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
    this._tooltipTextAttribute = "Default text";
    this.attachShadow({ mode: "open" });
  }

  // This method is executed when component is actually render on the DOM (mount), it is a build-in method
  connectedCallback() {
    const textAttributeValue = this.getAttribute("text");

    if (this.hasAttribute("text") && textAttributeValue) {
      this._tooltipTextAttribute = textAttributeValue;
    }

    const divElement = document.createElement("div");
    divElement.textContent = "(?)";

    divElement.addEventListener("mouseenter", this._showToolTip.bind(this));
    divElement.addEventListener("mouseleave", this._hideToolTip.bind(this));

    this.appendChild(divElement);
  }

  //   Add _ in front of method for create a private method, call this inside this class
  _showToolTip() {
    this._tooltipContainer = document.createElement("div");
    this._tooltipContainer.textContent = this._tooltipTextAttribute;

    console.log(this.style);

    this.appendChild(this._tooltipContainer);
  }

  _hideToolTip() {
    this.removeChild(this._tooltipContainer);
  }
}

// 1. The name of the custom component must contain 2 words separated with a dash, and firs word is better to be
// some custom and second word to  be the name of the actual component
// 2. Min 2 words but can have many separated with dashes
customElements.define("my-tooltip", ToolTip);
