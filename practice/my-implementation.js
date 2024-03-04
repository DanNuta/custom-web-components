class ModalCustomElement extends HTMLElement {
  constructor() {
    super();
    this.button = document.createElement("button");
    this.paragraph = document.createElement("p");
    this.isOpen = false;

    this.attachShadow({ mode: "open" });
    this.attributeParagraph = "Default text";
    this.template = document.querySelector("#template-custom");
    this.shadowRoot.append(this.template.content.cloneNode(true));
  }

  connectedCallback() {
    if (this.hasAttribute("customText") && this.getAttribute("customText")) {
      this.attributeParagraph = this.getAttribute("customText");
    }

    this.button.innerHTML = this.isOpen ? "Open" : "Close";
    this.button.addEventListener("click", this._handleClickModal.bind(this));
    this.shadowRoot.appendChild(this.button);

    this.paragraph.innerHTML = this.attributeParagraph;
    this.shadowRoot.appendChild(this.button);
  }

  _handleClickModal() {
    this.isOpen = !this.isOpen;
    this.button.innerHTML = this.isOpen ? "Open" : "Close";

    this.isOpen
      ? this.shadowRoot.appendChild(this.paragraph)
      : this.shadowRoot.removeChild(this.paragraph);
  }
}

customElements.define("my-modal", ModalCustomElement);
