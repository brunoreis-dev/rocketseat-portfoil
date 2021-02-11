const postsCard = document.querySelectorAll('.posts__card')

for(let card of postsCard) {
  let id = card.getAttribute('id')
  card.addEventListener('click', function() {
    window.location.href = `/conteudos/${id}`
  })
}