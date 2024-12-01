import React from 'react';

const SubscriptionItem = ({ subscription }) => {
  return (
    <li>
      <h4>Subscription ID: {subscription.id}</h4>
      <p>Subscriber: {subscription.subscriber}</p>
      <p>Amount: {subscription.amount}</p>
      <p>Period: {subscription.period}</p>
      <p>Status: {subscription.status}</p>
    </li>
  );
};

export default SubscriptionItem;
