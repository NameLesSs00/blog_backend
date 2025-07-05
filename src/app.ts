import express from 'express';

const app = express();

app.use(express.json());

app.use('/api',(req,res)=>{
  res.json({"you did it":"TRUE"})
});

export default app;
