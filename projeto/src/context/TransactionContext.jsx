import React, {useEffect, useState} from 'react'
import { ethers } from 'ethers'

import { contractAbi, contractAdress } from '../utils/constantes';


export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = ()=>{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAdress, contractAbi, signer);


    console.log({
        provider, 
        signer,
        transactionContract

    });
}

export const TransactionProvider = ({children}) =>{

    const[currentAccount, setCurrentAccount] = useState("");

    const checkIfWalletIsConnected = async ()=>{
        if(!ethereum) return alert("Please install Metamask");

        const accounts = await ethereum.request({method: 'eth_accounts'});
        console.log(accounts);
    }

    useEffect(() =>{
        checkIfWalletIsConnected();
    }, [])      

    const connectWallet = async() =>{
        try {
            if(!ethereum) return alert("Please install Metamask");
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});

            setCurrentAccount(accounts[0]);
        } catch (error) {
            
            console.log(error);
            throw new Error("No ethereum object");
        }
    }

    return (
        <TransactionContext.Provider value={{connectWallet}}>
            {children}
        </TransactionContext.Provider>
    )
}