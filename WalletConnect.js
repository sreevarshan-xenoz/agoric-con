import React, { useState } from 'react';
import Keplr from 'keplr-wallet';

const WalletConnect = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    if (!window.getOfflineSigner || !window.getOfflineSigner().getAccounts) {
      alert('Please install Keplr Wallet!');
      return;
    }

    const accounts = await window.getOfflineSigner().getAccounts();
    setWalletAddress(accounts[0].address);
    setWalletConnected(true);
  };

  return (
    <div>
      {!walletConnected ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <div>
          <p>Wallet connected: {walletAddress}</p>
        </div>
      )}
    </div>
  );
};

export default WalletConnect;
