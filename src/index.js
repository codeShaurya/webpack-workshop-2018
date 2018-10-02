import nav from "./nav";
import footer from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import makeImage from './image';

import imageUrl from '../style/webpack.jpg';

const image = makeImage(imageUrl, 500, 500);

const button = makeButton("My first button!");
button.style = makeColorStyle("cyan");
document.body.appendChild(button);
document.body.appendChild(footer);
document.body.appendChild(image);

console.log("Web page is running and highly optimized");
console.log("now fuck off");
