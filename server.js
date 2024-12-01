import express from 'express';
import bodyParser from 'body-parser';
import subscriptionRoutes from './api/subscriptions';

const app = express();

app.use(bodyParser.json());

app.use('/api/subscriptions', subscriptionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
