(function() {

    const showWork = document.querySelector('.work')
    const workMenu = document.querySelector('.js-open')
    const home = document.querySelector('.js-btn')



    showWork.addEventListener('click',(e) =>{
      workMenu.style.display = 'flex'
    })

    home.addEventListener('click',(e) =>{
      workMenu.style.display = 'none'

    })



    addEventListener('keydown', (e) =>{
      const{which} = e
        if(which === 27){
         workMenu.style.display = 'none'
        }
     })


})();
