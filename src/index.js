import sum from './sum';
import $ from "jquery";

let arr1 = [1,2,3];
let arr2 = [4, 5, 6];

console.log(sum([...arr1, ...arr2]));
console.log('webpack zero-config works');

$('h1').text('JQuery usage');

// import './style.css';