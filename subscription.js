const { E } = require('@agoric/eventual-send');

const subscriptionContract = async (zcf) => {

  const { timerService } = zcf;

  let subscriptions = [];

  
  const createSubscription = (amount, interval) => {
   
    const paymentTimer = timerService.setTimeout(() => {
      console.log('Payment due!');
      
    }, interval);

    
    subscriptions.push({ amount, interval, paymentTimer });

    return `Subscription created for ${amount} every ${interval}ms.`;
  };

  
  const cancelSubscription = (subscriptionId) => {
    const subscription = subscriptions[subscriptionId];
    if (subscription) {
      subscription.paymentTimer.clear();
      subscriptions = subscriptions.filter((_, index) => index !== subscriptionId);
      return 'Subscription cancelled';
    }
    return 'Subscription not found';
  };

  
  const getSubscriptions = () => subscriptions;

  
  const processPayment = async (subscriptionId, amount) => {
    const subscription = subscriptions[subscriptionId];
    if (!subscription) return 'Subscription not found';
    
    
    if (amount >= subscription.amount) {
      console.log('Payment processed');
      return 'Payment successful';
    }
    return 'Insufficient funds';
  };

  return { createSubscription, cancelSubscription, getSubscriptions, processPayment };
};

export default subscriptionContract;
