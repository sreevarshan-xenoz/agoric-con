import React from 'react';
import SubscriptionItem from './SubscriptionItem';

const SubscriptionList = ({ subscriptions }) => {
  return (
    <div>
      <h3>Subscriptions</h3>
      <ul>
        {subscriptions.map((sub) => (
          <SubscriptionItem key={sub.id} subscription={sub} />
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionList;
