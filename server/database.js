const mongoose = require('mongoose')

class Connection {
    constructor(){
        this.connectMongo()
    }

    async connectMongo(){
       
        try {
            this.connection = await mongoose.connect('mongodb://localhost/post-api', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            })
            console.log('MongoDB está conectada')
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new Connection()