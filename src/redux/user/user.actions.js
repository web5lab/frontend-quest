import { handleWalletConnect } from "../../services/connectWallet";
import {SET_WALLET,SET_Xp,SET_BUTTON} from "./user.type";

export const wallet=(obj)=>(dispatch)=>{
    // dispatch({ type: SET_WALLET,walletAddress:obj });
    dispatch({ type: SET_WALLET, payload: obj });
    console.log("yaha tak ",obj) 
}

export const connectWallet=()=>async(dispatch)=>{
    dispatch(setButtonState('Connecting...'))
   let data= await handleWalletConnect()
   dispatch({ type: SET_WALLET, payload: data.address });
   dispatch({ type: SET_Xp, payload: data.xp });

} 

export const setButtonState=(state)=>async(dispatch)=>{
    dispatch({type:SET_BUTTON,payload:state})


}

export const xp=(obj)=>(dispatch)=>{
    // dispatch({ type: SET_WALLET,walletAddress:obj });
    dispatch({ type: SET_Xp, payload: obj });
    
}