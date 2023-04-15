import {SET_WALLET,SET_Xp,SET_USER_DATA} from "./user.type";

export const wallet=(obj)=>(dispatch)=>{
    // dispatch({ type: SET_WALLET,walletAddress:obj });
    dispatch({ type: SET_WALLET, payload: obj });
    console.log("yaha tak ",obj) 
}