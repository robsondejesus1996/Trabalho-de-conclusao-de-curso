import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractAbi, contractAdress } from "../utils/constantes";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAdress,contractAbi,signer);

  return transactionContract;

  
};

export const TransactionProvider = ({ children }) => {

  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({addressTo: '', amount: '', keyword: '', message: ''});
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));

  const handleChange = (e, name) =>{
    setFormData((prevState)=> ({...prevState, [name]: e.target.value}));
  }

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask");

      const {addressTo, amount, keyword, message}= formData;
      const transactionContract = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);
      

      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
            from: currentAccount,
            to: addressTo,
            gas: '0x5208', // 21000 Gwei 0.000021 EHT taxa de gás
            value: parsedAmount._hex,
        }]
      })

      const transactionHash = await transactionContract.addToBlockhain(addressTo, parsedAmount, message, keyword);
      setIsLoading(true);
      console.log(`Loading - ${transactionHash.hash}`);
      await transactionHash.wait();

      setIsLoading(false);
      console.log(`Sucess - ${transactionHash.hash}`);

      const transactionCount = await transactionContract.getEthereumContract();

      setTransactionCount(transactionCount.toNumber());
      

    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install Metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};
