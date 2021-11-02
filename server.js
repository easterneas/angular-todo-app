function requireHTTPS (req, res, next) {
  // membuat semua request yang sebelumnya HTTP biasa, menjadi HTTPS
  if(
    !req.secure
    // khusus untuk server yang kita deploy di Heroku
    && req.get('x-forwarded-proto') !== 'https'
  ) {
    return res.redirect(
      'https://' + req.get('host') + req.url
    )
  }

  next();
}

// aplikasi Express-nya

const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app
.use(requireHTTPS) // kalau dijalankan secara local, comment line ini
// ikuti nama app-nya mengikuti property name di package.json
// misal: ./dist/<NAMA_APP_DI_package.json>
.use(express.static('./dist/testing'))

.get('/*', (req, res) => res.sendFile('index.html', { root: './dist/testing' }))

.listen(port, () => {
  console.log(`My Angular application is now running! http://localhost:${port}`)
})
