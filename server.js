const express = require('express')
const app = express()
let users = []

app.use(express.json())

app.post('/cadastrar', (req, res) => {
    users.push(req.body)
    res.send('Usuário cadastrado')
})

app.get('/', (req, res) => {
    res.send(users)
})

app.get('/:id', (req, res) => {
    let user = findById(req.params.id)
    if (user) {
        res.send(user)
    } else {
        res.send(`Registro não encontrado para o identificador ${req.params.id}`)
    }
})

app.put('/:id', (req, res) => {
    for (let user of users) {
        if (user.id == req.params.id) {
            user.id = req.body.id
            user.nome = req.body.nome
            user.idade = req.body.idade
            res.send('Registro atualizado')
            return
        }
    }
    res.send('Registro não encontrado')
})

// app.delete('/:id', (req, res) => {
//     for(let)
// })

function findById(id) {
    for (let user of users) {
        if (user.id == id) {
            return user
        }
    }
}

app.listen('3000')
