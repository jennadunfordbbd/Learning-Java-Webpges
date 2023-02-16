import { html } from "lit-element";
class FirstPage extends HTMLElement {

  constructor() {
    super();
    console.log("sup");
  }

  render(){
    return html`
    <section>My section</section>
    <article>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula metus eu mauris faucibus condimentum eget nec ipsum. 
    Praesent nec diam in ligula bibendum finibus. Nam eu diam non nisi tincidunt hendrerit vitae at ipsum. Curabitur magna lorem, auctor et 
    sapien ac, suscipit malesuada purus. Duis sit amet lectus mauris. Quisque in porta lorem. Suspendisse pharetra rutrum ligula, at mattis augue tempor ut. 
    Phasellus vitae arcu non ex suscipit malesuada. Praesent sed magna ligula. Sed at turpis nec urna gravida gravida vitae vitae velit. 
    Praesent fermentum ante ac malesuada auctor. Morbi lacus orci, eleifend vel dignissim eget, tempus vel sem. Fusce auctor ut sem at ultricies.</p>
    </article>
    `;
  }
}

customElements.define('first-page', FirstPage);
console.log("script is here");


