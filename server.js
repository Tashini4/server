import express from 'express';



const app = express();
const PORT = 5000;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello from Express server!</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});