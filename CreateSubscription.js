import React, { useState } from 'react';
import axios from 'axios';

const CreateSubscription = () => {
  const [subscriber, setSubscriber] = useState('');
  const [amount, setAmount] = useState('');
  const [period, setPeriod] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/subscriptions`, {
        subscriber,
        amount,
        period,
      });
      alert(`Subscription created: ${response.data.subscriptionId}`);
    } catch (error) {
      console.error('Error creating subscription:', error);
    }
  };

  return (
    <div>
      <h3>Create a Subscription</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Subscriber Address:</label>
          <input
            type="text"
            value={subscriber}
            onChange={(e) => setSubscriber(e.target.value)}
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Period (monthly/yearly):</label>
          <input
            type="text"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          />
        </div>
        <button type="submit">Create Subscription</button>
      </form>
    </div>
  );
};

export default CreateSubscription;
