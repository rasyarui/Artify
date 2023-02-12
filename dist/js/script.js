const menuBar = document.querySelector('.menu-bar');
const menuNav = document.querySelector('.menu-navigation');
const navigation = document.querySelector('.navigation');


menuBar.addEventListener('click', function () {
  menuNav.classList.toggle('menu-active');
});


 window.addEventListener('scroll', () => {
  console.log(window.scrollY);
  if(window.scrollY >= 610){
    navigation.classList.add('aca');
  }else{
    navigation.classList.remove('aca');

  }
 })

 
