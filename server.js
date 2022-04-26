const express = require('express')
const app = express()

app.listen('3000')

// Criando rota base GET
// app.route('/').get((req, res) => {
//     res.send('Hello World!')
// })

// Criando rota base POST
// middleware
// informa como deve ser interpretado o conteúdo recebido no Request
// app.use(express.json())

// app.route('/').post((req, res) => res.send(req.body))

// Criando rota base PUT
app.use(express.json())

let author = 'Carlos'
app.route('/').put((req, res) => {
    author = req.body.author
    res.send('Registro atualizado')
})

app.route('/').get((req, res) => {
    res.send(author)
})
