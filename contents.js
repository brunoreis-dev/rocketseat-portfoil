const postsCard = document.querySelectorAll('.posts__card')
const postsModal = document.querySelector('.modal-posts')
const modalContainer = document.querySelector('.modal-posts__container')
const postsClose = document.querySelector('.modal-posts__close')
const modalMaximize = document.querySelector('.modal-posts__maximize')
const maximizeIcon = document.querySelector('.maximize-icon')
const minimizeIcon = document.querySelector('.minimize-icon')
let iframe = document.querySelector('.modal-posts-frame')

for(let card of postsCard) {
  let post = card.getAttribute('data-post')
  let linkPost = 'https://blog.rocketseat.com.br/'

  card.addEventListener('click', function() {
    iframe.src = linkPost + post
    postsModal.classList.add('active')
  })
}

postsClose.addEventListener('click', function() {
  postsModal.classList.remove('active')
  iframe.src = ''
  modalContainer.classList.remove('maximize')
  maximizeIcon.style.opacity = '1'
  minimizeIcon.style.opacity = '0'
})

modalMaximize.addEventListener('click', function() {
  if(modalContainer.classList.contains('maximize')) {
    modalContainer.classList.remove('maximize')
    maximizeIcon.style.opacity = '1'
    minimizeIcon.style.opacity = '0'
  } else {
    modalContainer.classList.add('maximize')
    maximizeIcon.style.opacity = '0'
    minimizeIcon.style.opacity = '1'
  }
})