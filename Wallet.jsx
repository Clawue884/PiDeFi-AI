import React, { useState } from 'react';
import { transferPi } from '../services/api';

const Wallet = () => {
  const [senderId, setSenderId] = useState('');
  const [receiverId, setReceiverId] = useState('');
  const [amount, setAmount] = useState('');
  const [authToken, setAuthToken] = useState('');

  const handleTransfer = async () => {
    const result = await transferPi({ senderId, receiverId, amount, authToken });
    if (result.success) {
      alert("Transfer successful!");
    } else {
      alert(`Transfer failed: ${result.error}`);
    }
  };

  return (
    <div>
      <h2>Transfer Pi Coin</h2>
      <input placeholder="Sender ID" onChange={(e) => setSenderId(e.target.value)} />
      <input placeholder="Receiver ID" onChange={(e) => setReceiverId(e.target.value)} />
      <input placeholder="Amount" type="number" onChange={(e) => setAmount(e.target.value)} />
      <input placeholder="Auth Token" onChange={(e) => setAuthToken(e.target.value)} />
      <button onClick={handleTransfer}>Transfer</button>
    </div>
  );
};

export default Wallet;
