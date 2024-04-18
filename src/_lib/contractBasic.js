// import Web3 from "web3";
const hre = require('hardhat');


// const abiJSON = require("../../contract_abi/DonationManagement.json");
// const orgABI = abiJSON.abi;

export default async function contractBasic(){
    try{
        const ORGContract = await hre.ethers.getContractFactory("DonationContract");
    
        const contratAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        const contract = await ORGContract.attach(contratAddress);

        const new_org = await contract.getOrgInfo("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");
        console.log(new_org);
    } catch(err){
        console.log(err);
    }
}
