(function() {
  const showWork = document.querySelector('.work')
  const workMenu = document.querySelector('.work-menu')


  function effect (e) {
       // to get the correct effect
       console.log(e,workMenu);
      const {target} = e
      const effect = target.getAttribute('data-effect');
       // adding the effects
       workMenu.classList.toggle(effect);
       workMenu.classList.toggle('js-open');
     }

     showWork.addEventListener('click', effect)

})();
