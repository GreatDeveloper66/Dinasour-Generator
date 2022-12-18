/*import*/
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import fetch from 'node-fetch'

/*constants*/
const app = express()
const port = 3000
const api_key = process.env.XRapidAPIKey
const api_host = process.env.XRapidAPIHost
const url = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-RapidAPI-Key': api_key,
    'X-RapidAPI-Host': api_host
  }
};

/*set up server*/
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`)
})

/*set up get routes*/
app.get('/chucknorrisrandomjoke', async (request, response) => {
   const fetchAPI = await fetch(url,options)
   const chuckNorrisResponse = await fetchAPI.json()
   response.json(chuckNorrisResponse)
        
})




