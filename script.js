 //code to get the menu open and close button.
 const menuToggle = document.getElementById('menu-toggle');
 const menuClose = document.getElementById('menu-close');

 //Event listeners used to open and close the menu on click.
 menuToggle.addEventListener('click', () => {
     menuToggle.classList.toggle('active');
 });

 menuClose.addEventListener('click', () => {
     menuToggle.classList.remove('active');
 });