import React, { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase-config'; // Only import Firestore (db)
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore functions

function App() {
  return (
    <div className="App">
      <TransactionInfo/>
    </div>
  );
}

function get_transaction_data() {
  return { "wallet_address": "0x123ABC...", "ETH_sent": 5, "ETH_received": 2 };
}

const TransactionInfo = () => {
  const transaction_data = get_transaction_data();
  const walletAddress = transaction_data["wallet_address"];
  const EthSent = transaction_data["ETH_sent"];
  const EthReceived = transaction_data["ETH_received"];

  return(
    <div>
      <p>Wallet Address: ${walletAddress}</p>
      <p>Eth Sent: ${EthSent}</p>
      <p>Eth Received: ${EthReceived}</p>
    </div>
  );
}

export default App;

