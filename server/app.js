const express = require('express')
const cors = require('cors')
const routes = require('./routes/posts')
require('./database')

class App {
    constructor(){
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(express.json())
        this.app.use(cors())
    }

    routes(){
        this.app.use(routes)
    }

}

module.exports = new App().app