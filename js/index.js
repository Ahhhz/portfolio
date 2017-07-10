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

     function closeScreen (e) {
       const {keyCode} = e
       keyCode === 27 ? workMenu.classList.remove('js-open'): workMenu.classList.add('close') ;
     }

     showWork.addEventListener('click', effect)
     showWork.addEventListener('keydown', closeScreen)
})();
