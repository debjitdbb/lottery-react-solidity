import Web3 from "web3";

const web3 = new Web3(window.web3.currentProvider);
web3.currentProvider.enable();

export default web3;