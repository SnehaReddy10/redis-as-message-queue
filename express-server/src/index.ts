import express from 'express';
import { createClient } from 'redis';

const client = createClient();
const app = express();

app.use(express.json());

client
  .connect()
  .then(() => {
    console.log('Connected to redis client');
  })
  .catch((err) => console.error);

app.post('/', (req, res) => {
  const { problemId, userId } = req.body;

  client.lPush('submissions', JSON.stringify({ problemId, userId }));
  res.json({ message: 'Submission Received' });
});

app.listen(3000);
