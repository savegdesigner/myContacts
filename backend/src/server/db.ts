import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/myContacts', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})