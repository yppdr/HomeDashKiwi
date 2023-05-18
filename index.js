// Init dep
const express = require('express')
const app = express()
const port = 3000



//render index
app.get('/', (req, res) => {
  res.send('Hello World!')
})


/* 
Liste des route pour l'API : 
- Get form recherche (google, KWN, etc..)
- Get URL + visitées
- Get météo local
- Get temp/hum de HA
- Get speedtest
- Get qui est sur discord
- Get qui de twitch est en live
 */




app.listen(port, () => {
  console.log(`App lancé sur le port : ${port}`)
})
