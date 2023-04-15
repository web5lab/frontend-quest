import { SET_WALLET } from "./user.type"

const initialState = {
    walletAddress:"Connet to wallet",
    pointXp:0,
    secretToken:"",
    userData:[]
}


export const userReducer = (state=initialState,{type,payload})=>{

    switch(type){

        case SET_WALLET:{
            console.log("payloadmy",payload,type);
            return {...state,walletAddress:payload}
             
        }
        
        default:{
            return state
        }
    }

}
