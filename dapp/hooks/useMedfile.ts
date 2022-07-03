import Medfile from './Medfile.json';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';

const ContractABI = Medfile.abi;
const ContractAddress = '0x155D74868b242f27BD8E11cEfDb6c39EFf5f9d72';
const Ethereum = typeof window !== 'undefined' && (window as any).ethereum;

const getMedfileContract = () => {
  const provider = new ethers.providers.Web3Provider(Ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(ContractAddress, ContractABI, signer);
};

type User = {
    wallet: string,
    name: string,
    userid: string,
    post: string,
    pno: string
}

type Patient ={
    author: string, 
    pname: string,
    report: string,
    treatment: string,
    ppno: string,
    paddress: string
}

const useMedfile=()=>{
    const [currentAccount,setCurrentAccount]= useState<string>('');
    const [currentUser,setCurrentUser] = useState<User | null>(null);
    const [patients,setPatients]=useState<Patient[]>([]);
    const connect =async ()=>{
        try{
            if(!Ethereum){
                alert('Please install Metamask');
                return;
            }
            const accounts =await Ethereum.request({method: 'eth_requestAccounts'});
            if(accounts.length === 0){
                console.log('No authosized accounts');
                return;
            }

            const account =accounts[0];
            console.log('Connected to account:', account);
            setCurrentAccount(account);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(()=>{
        if(!Ethereum){
            console.log('No ethereum wallets found, please get metamask');
            return;
        }
        connect();
        getPatient();
    },[]);
    
    useEffect(()=>{
        if(currentAccount){
            getUser();
            getPatient();
        }
    },[currentAccount]);

    const getUser = async ()=>{
        const contract = getMedfileContract();
        const user =await contract.getUser(currentAccount);
        const {wallet,name,userid,post,pno} =user;
        setCurrentUser({wallet,name,userid,post,pno});
        return user;
    }

    const createUser = async (userid: string, name: string, post: string, pno: string)=>{
        const contract =getMedfileContract();
        const user =await contract.signup(userid,name, post, pno);
    }

    const postPatient = async (pname: string, report: string, treatment: string, ppno: string, paddress: string)=>{
        const contract= getMedfileContract();
        await contract.postPatient(pname,report,treatment,ppno,paddress);
        await getPatient();
    };

    const getPatient =async ()=>{
        const contract =getMedfileContract();
        const patients = await contract.getPatient();
        console.log(patients);
        setPatients(patients);
    }

    return {connect, account:currentAccount, user:currentUser, createUser, postPatient,patients};
}


export default useMedfile
