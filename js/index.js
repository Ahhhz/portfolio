(function() {
  const showWork = document.querySelector('.work')
  const workMenu = document.querySelector('.work-menu')


  function effect (e) {
   
       console.log(e,workMenu);
      const {target} = e
      const effect = target.getAttribute('data-effect');

       workMenu.classList.toggle(effect);
       workMenu.classList.toggle('js-open');
     }

     showWork.addEventListener('click', effect)

})();
