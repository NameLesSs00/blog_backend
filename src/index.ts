import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/posts', (req, res) => {
  res.json([{ title: 'Hello World from Express + TS this is working just fine !!!' }]);
});


const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
