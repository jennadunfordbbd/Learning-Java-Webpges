import "../components/first-component.component";
import { html } from "lit-element";
import { mainStyles } from "../styles";

const styles = html` <style>
  ${mainStyles()}
</style>`;

class firstPage extends HTMLElement {
  constructor() {
    super();
    console.log("Created custom element!");
  }
}
function addCustomElement() {
  customElements.define("e-first-page", firstPage);
  console.log("Added MyElement to custom element registry!");
}
// add call here, because onload did not work for me
addCustomElement();
