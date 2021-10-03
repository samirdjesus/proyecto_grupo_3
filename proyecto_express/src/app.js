const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const app = express()
const indexRoutes = require('./routes/index')

// configuraciones
const port = 3000
mongoose.connect('mongodb+srv://james:jameszam960212@cluster0.zlimg.mongodb.net/Cluster0?retryWrites=true&w=majority')
.then(db=>console.log('connected'))
.catch(err=>console.log(err))

//middlewires
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))

// rutas
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use('/products/',indexRoutes);


// inicio servidor
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})