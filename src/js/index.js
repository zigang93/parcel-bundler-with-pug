// import css and js
import '/scss/index.scss';
import 'bootstrap';

// get current year for footer;
var currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;
