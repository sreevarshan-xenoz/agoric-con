export const createPaymentTimer = (timerService, interval, callback) => {
    return timerService.setTimeout(callback, interval);
  };
  