// take a str, the button label and return a element
/**
 *
 * @param {string} buttonName
 * @returns {Element}
 */

import '../style/button.css';

const makeButton = buttonName => {
  const buttonLabel = `Button ${buttonName}`;
  const button = document.createElement("button");
  button.innerHTML = buttonLabel;
  return button;
}

export default makeButton
