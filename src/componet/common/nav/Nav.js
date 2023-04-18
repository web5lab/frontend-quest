import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import { Button } from "@chakra-ui/react";
import Web3 from 'web3';
import { useDispatch, useSelector } from "react-redux";
import { wallet } from "../../../redux/user/user.actions";
import twitteAuth from "../../../services/twitterAuth";
 
function Nav() {
 
  const {  
    walletAddress,
  pointXp,
  secretToken,
  connectionStatus,
  userData,} = useSelector(
    (state) => state.userManager
  );

  const [clicked, setClicked] = useState(false);
  const [web3, setWeb3] = useState(null);
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('signing to quest');
  const [signature, setSignature] = useState('');
  const [walletConnectBtn, setwalletConnectBtn] = useState(walletAddress.length<17?walletAddress: walletAddress.slice(0,5)+'...'+walletAddress.slice(-5));
  const [xp, setxp] = useState(0)


  let dispatch = useDispatch();

  console.log(walletAddress,"mainu ");
  const handleClick = () => {
    setClicked(!clicked);
  };

 
  const handleWalletConnect = async () => {
    // if (connectionStatus) {
    //   return console.log("user already connected");
    // }
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setWeb3(web3);
        setAddress(accounts[0]);
        await handleSignMessage(accounts[0]);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleSignMessage = async (item) => {
    const messageToSign = message.trim();
    if (web3 && address && messageToSign) {
      try {
        const signature = await web3.eth.personal.sign(messageToSign, address, '');
        setSignature(signature);
        sendSignedMessage(signature);
        console.log(signature);
        dispatch(wallet(item));
      } catch (error) {
        console.error(error);
      }
    }
  };

  const DISCORD_AUTH_URL = "https://discord.com/oauth2/authorize?client_id=1093225051781869668&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2FQuest%2F641b16bd5546483a6a14da7b&response_type=code&scope=identify%20guilds%20guilds.join%20guilds.members.read"
  const discordValidator = async()=> {
      window.location = DISCORD_AUTH_URL; 
  }
  const sendSignedMessage = async (signature) => {
    setwalletConnectBtn(address.slice(0,5)+'...'+address.slice(-5))
    const apiUrl = 'http://localhost:4000/user/metamaskAuth';
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, signature ,address}),
      });
      const responseData = await response.json();
      localStorage.clear('jwtToken');
      localStorage.clear('Xp');
      localStorage.clear('address');
      console.log(response);
      setxp(responseData.points);
      console.log("jwt output",responseData.token);
      localStorage.setItem('jwtToken',responseData.token);
      localStorage.setItem('Xp',responseData.points);
      localStorage.setItem('address',address);
      console.log(responseData);
      const t = localStorage.getItem('jwtToken');
      console.log(responseData.token);
    } catch (error) {
      console.error(error,"error from auth");
    }
  };

  return (
    <div className="startdivNav">
      <ul id="list" className={clicked ? "#list active" : "#list"}>
        <li>
          {/* <NavLink to="/login" className="navbar">
            Set Up Quest
          </NavLink> */}
        </li>
        <li>
          {/* <NavLink to="/MyQuest" className="navbar">
            Explore Quest
          </NavLink> */}
        </li>

        <li>
          <NavLink className="navbarBtn">
            {/* wallet connect used here */}
            {pointXp > 0 ? (
        <span id="xp">{pointXp}Xp</span>
      ) : (
        <span></span>
      )}
            <Button id="connect_wallet" onClick={handleWalletConnect}>{walletConnectBtn}</Button>
            <Button onClick={discordValidator}>discord</Button>
            <button onClick={twitteAuth}>Sign in with Twitter</button>
            {/* wallet connect function from here */}
          </NavLink>
        </li>
      </ul>
      <div className="icon" onClick={handleClick}>
        <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </div>
  );
}

export default Nav;
