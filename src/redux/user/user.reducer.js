import { SET_WALLET ,SET_Xp,SET_BUTTON } from "./user.type"

const initialState = {
    walletAddress:"",
    buttonState:'Connect wallet',
    connectionStatus:false,
    pointXp:0,
    secretToken:"",
    userData:[]
}


export const userReducer = (state=initialState,{type,payload})=>{

    switch(type){

        case SET_WALLET:{
            console.log("payloadmy",payload,type);
            return {...state,walletAddress:payload,connectionStatus:true,buttonState:payload.slice(0, 5) + '...' + payload.slice(-5)}
             
        }
        case SET_BUTTON:{
            return {...state,buttonState:payload};
        }

        case SET_Xp:{
            console.log("payloadmy",payload,type);
            return {...state,pointXp:payload}
             
        }
        
        default:{
            return state
        }
    }

}
