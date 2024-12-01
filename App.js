import React, { useState, useEffect } from 'react';
import SubscriptionList from './components/SubscriptionList';
import CreateSubscription from './components/CreateSubscription';
import WalletConnect from './components/WalletConnect';
import axios from 'axios';
import './App.css';

function App() {
  const [subscriptions, setSubscriptions] = useState([]);

  // Fetch subscriptions from the backend
  const fetchSubscriptions = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/subscriptions`);
      setSubscriptions(response.data.subscriptions);
    } catch (error) {
      console.error("Error fetching subscriptions", error);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  return (
    <div className="App">
      <h1>Agoric Subscription Manager</h1>
      <WalletConnect />
      <CreateSubscription />
      <SubscriptionList subscriptions={subscriptions} />
    </div>
  );
}

export default App;
