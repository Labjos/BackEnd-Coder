const express = require('express')

const app = express()


app.get('/productos', (req, res, next) => {
    res.send("SERVIDOR EXPRESS")
})

app.get('/productos', (req, res) => {
    async function getAll() {
        const read = await false.promise.readFile("productos.txt", "utf-8")
        try {
            const productos = JSON.parse(read)
            res.send(
                productos.forEach(product => {
                    console.log('product.marca', `${product.marca }`)
                })
            )
        } catch (error) {
            console.log(error)
        }
    }

    getAll()
})

app.get('/productos', (req, res) => {
    async function getAlter() {
        const read = await false.promise.readFile("productos.txt", "utf-8")
        try {
            const productos = JSON.parse(read)
            res.send(
                productos.random.forEach(product => {
                    console.log('product.marca', `${product.marca }`)
                })
            )
        } catch (error) {
            console.log(error)
        }
    }

    getAlter()
})



app.listen(8080, () => {
    console.log("Servidor ON 8080")
})



