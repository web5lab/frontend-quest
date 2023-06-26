import { handleWalletConnect } from "../../services/connectWallet";
import {SET_WALLET,SET_Xp,SET_BUTTON} from "./user.type";

export const wallet=(obj)=>(dispatch)=>{
    // dispatch({ type: SET_WALLET,walletAddress:obj });
    dispatch({ type: SET_WALLET, payload: obj });
    console.log("yaha tak ",obj) 
}

export const connectWallet=()=>async(dispatch)=>{
    try{

        dispatch(setButtonState('Connecting...'))
        let data= await handleWalletConnect()
        if(data.error){
            alert(data.error.message)
            setTimeout(()=>{

                dispatch(setButtonState('Connect wallet'))
            },500)
        }else{

            dispatch({ type: SET_WALLET, payload: data.address });
            dispatch({ type: SET_Xp, payload: data.xp });
        }
    }catch(e){

    }

} 

export const setButtonState=(state)=>async(dispatch)=>{
    dispatch({type:SET_BUTTON,payload:state})


}

export const xp=(obj)=>(dispatch)=>{
    // dispatch({ type: SET_WALLET,walletAddress:obj });
    dispatch({ type: SET_Xp, payload: obj });
    
}