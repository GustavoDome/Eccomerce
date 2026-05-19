 import express from 'express';

 const app = express();

app.get('/', (req, res) => {
  res.send('Hola desde TypeScript + Docker');
});

app.listen(3000, () => {
  console.log('Servidor funcionando');
});