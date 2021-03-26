"use strict";
let year = document.querySelector('.year');
let date = new Date();
year.innerHTML = date.getFullYear();

$(document).ready(function () {
  $('.slider').slick({
    dots: true
    
  });
 

});