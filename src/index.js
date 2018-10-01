import nav from './nav';
import { top, bottom } from './footer';
import makeButton from './button';
import { red, blue, makeColorStyle } from './button-style'


console.log(nav(), top, bottom);
console.log(makeButton("this is the first button"), makeColorStyle("This is the new style"));