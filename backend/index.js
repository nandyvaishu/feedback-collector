const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/feedback');

const Feedback = mongoose.model('Feedback', { message: String });

app.post('/feedback', async (req, res) => {
  const feedback = new Feedback(req.body);
  await feedback.save();
  res.send({ status: 'ok' });
});

app.listen(5000, () => console.log("Server running on port 5000"));