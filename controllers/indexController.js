let path = require('path');

let indexController = {
  index: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/index.html'))
  },
  contacto: (req, res) => {
    res.send('Contacto')
  },
  about: (req, res) => {
    res.send('Acerca de ')
  }
}

module.exports = indexController