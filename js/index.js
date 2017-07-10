(function() {
  const showWork = document.querySelector('.work')
  const workMenu = document.querySelector('.flex-work-menu')


  function effect (e) {
      const {target} = e
      const effect = target.getAttribute('data-effect');
       workMenu.classList.toggle(effect);
       workMenu.classList.toggle('js-open');
     }

     function closeScreen (e) {
       const {keyCode} = e
       console.log(e);
      // const {27} = keyCode
       keyCode  ?  workMenu.classList.remove('js-open') : false

     }

    //  window.addEventListener('click',(e)=>{
    //   const {clientX} = e
    //   clientX < 37  ? closeScreen() : false
    //  })
     showWork.addEventListener('click', effect)
     showWork.addEventListener('keydown', closeScreen)
})();
