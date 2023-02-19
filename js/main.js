modalCross = document.querySelector('.close-modal');
modal = document.querySelector('.modal-test')
iconsSocial = document.querySelectorAll('.modal-test__redes i')
contactMe = document.querySelector('.contact-me-button');

modalCross.addEventListener('click', ()=>{
    modal.classList.add("display-close")
})
contactMe.addEventListener('click',()=>{
    modal.classList.remove('display-close');
})

