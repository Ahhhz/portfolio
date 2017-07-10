(function() {
    const showWork = document.querySelector('.work')
    const workMenu = document.querySelector('.js-open')
    const home = document.querySelector('.js-btn')



    showWork.addEventListener('click',(e)=>{
      workMenu.style.display = 'flex'
    })

    home.addEventListener('click',(e) =>{
      workMenu.style.display = 'none'

    })

    window.addEventListener('keydown',(e) =>{
      const {keyCode} = e
      console.log(keyCode);
      (keyCode === 27) ? workMenu.style.display = 'none' :  workMenu.style.display = 'none'

    })


})();
