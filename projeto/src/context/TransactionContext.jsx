import React, {useEffect, useState} from 'react'
import { ethers } from 'ethers'

import { contractAbi, contractAdress } from '../utils/constantes';


export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = ()=>{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
}