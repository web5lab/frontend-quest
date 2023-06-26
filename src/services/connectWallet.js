import Web3 from "web3";
import { useDispatch, useSelector } from "react-redux";
import { wallet, xp } from "../redux/user/user.actions";
import { CONSTS } from "../Consts";


export const IntilizeData = async() => {
    let dispatch = useDispatch();
   const walletAd = localStorage.getItem('address');
//    const jwtToken = localStorage.getItem('jwtToken');
   const xpData = localStorage.getItem('Xp')
//    if (!walletAd || !jwtToken ) {
//     return null;
//    }
   dispatch(wallet(walletAd));
   dispatch(xp(xpData));
}

export const handleWalletConnect = async () => {

   // if (connectionStatus) {
   //   return console.log("user already connected");
   // }
   if (window.ethereum) {
     try {
       await window.ethereum.enable();
       const web3 = new Web3(window.ethereum);
       const accounts = await web3.eth.getAccounts();
       const address= accounts[0];
       let message='signing to quest'
       const result={address:address,}
       const messageToSign = message.trim();
       if (web3 && address && messageToSign) {
           const signature = await web3.eth.personal.sign(messageToSign, address, '');
           const apiUrl = `${CONSTS.SERVER_URL}/user/metamaskAuth`;
             const response = await fetch(apiUrl, {
               method: 'POST',
               headers: {
                 'Content-Type': 'application/json',
               },
               body: JSON.stringify({ message, signature, address }),
             });
             const responseData = await response.json();
             localStorage.clear('jwtToken');
             localStorage.clear('Xp');
             localStorage.clear('address');
             console.log(response);
             result.xp=responseData.points
             console.log("jwt output", responseData.token);
             localStorage.setItem('jwtToken', responseData.token);
             localStorage.setItem('Xp', responseData.points);
             localStorage.setItem('address', address);
             console.log(responseData);
             const t = localStorage.getItem('jwtToken');
             console.log(responseData.token);
           console.log(signature);

       }
       return result;
     } catch (error) {
       console.log(error);
       return {error}
     }
   }
 };