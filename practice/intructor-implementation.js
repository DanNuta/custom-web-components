class Modal extends HTMLElement {
  constructor() {
    super();
    this._isVisible = false;
    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = `<button></button>
    <p id="info-box"><slot>More info</slot></p>`;

    this._buttonElement = this.shadowRoot.querySelector("button");
    this._infoBox = this.shadowRoot.querySelector("#info-box");

    this._buttonElement.addEventListener(
      "click",
      this._showMoreInfo.bind(this)
    );
  }

  connectedCallback() {
    if (this.getAttribute("is-visible") === "true") {
      this._isVisible = true;
      this._buttonElement.textContent = "Open";
      this._infoBox.style.display = "block";
    } else {
      this._buttonElement.textContent = "Close";
      this._infoBox.style.display = "none";
    }
  }

  _showMoreInfo() {
    this._isVisible = !this._isVisible;
    this._buttonElement.innerHTML = this._isVisible ? "Open" : "Close";
    this._infoBox.style.display = this._isVisible ? "block" : "none";
  }
}

customElements.define("my-modal", Modal);
