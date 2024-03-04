class ConfirmLink extends HTMLAnchorElement {
  constructor() {
    super();
  }
  connectedCallback() {
    console.log(this, "this");
  }
}

// When extends a specific html element need to pass a third argument to the define
// method as is below with "{ extends: "a" }"
customElements.define("custom-link", ConfirmLink, { extends: "a" });
