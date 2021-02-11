const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const data = require('./data')

server.set('view engine', 'njk')
server.use(express.static(__dirname + '/public'))

nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true,
})


server.get('/', function(req, res) {
  return res.render('about', { about: data.about })
})

server.get('/portfolio', function(req, res) {
  return res.render('portfoil', {items: data.videos})
})

server.get('/video', function(req, res) {
  const id = req.query.id

  const video = data.videos.find(function(video) {
    return video.id == id
  })

  if(!video) return res.status(404).render('not-found')

  return res.render('video', { item: video })
})

server.get('/conteudos', function(req, res) {
  return res.render('contents', {items: data.contents})
})

server.get('/conteudos/:id', function(req, res) {
  const id = req.params.id

  console.log(id)

  const content = data.contents.find(function(content) {
     if(content.id == id) return true
  })

  if(!content) res.status(404).render('/not-found')

  return res.render('content', {content})
})



server.use(function(req, res) {
  res.status(404).render('not-found')
})


// Iniciar o servidor, o servidor sempre fica "ouvindo uma porta".
server.listen(5000, function() {
  console.log('server is running')
})