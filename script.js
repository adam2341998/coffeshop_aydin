'use strict';

const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
function removeActiveClasses (){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}



// modal
// 

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const body = document.body;

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  body.classList.add('noScroll');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  body.classList.remove('noScroll');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});