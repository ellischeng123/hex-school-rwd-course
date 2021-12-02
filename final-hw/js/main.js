$(document).ready(function() {
    $('.menu-bar').on('click',  function(e){
       e.preventDefault();
       $('.menu').toggleClass('show-menu');
   });
 });