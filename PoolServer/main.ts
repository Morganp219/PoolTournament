import express from 'npm:express';

const app = express()

app.listen(3000, () => {
  console.log(`Server is Listening on 3000`)
})