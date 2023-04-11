import React from 'react';
import TwitterLogin from 'react-twitter-auth';
 const client_id = "QjVLRTREVWpzWGZERlRFa0pON1o6MTpjaQ"
 const client_secret = "CtxTZpuCNh1p6FwYnHArKWWseH5Twz9p7ECb8WAD1yLVLRMwpu"
const TwitterButton = () => (
  <TwitterLogin
    authCallback={handleTwitterResponse}
    consumerKey="G0JVZB5t3dF6plaSNEHGdz8RE"
    consumerSecret="sibPFMeQ8JWCogWa1VRmaxkX5w2wzxgQkf9exg2dyGByR6DFK8"
    callbackUrl="http://localhost:3001/callback"
    buttonTheme="dark"
  >
    Sign in with Twitter
  </TwitterLogin>
);

const handleTwitterResponse = (error, data) => {
  if (!error) {
    const oauthToken = data.oauth_token;
    const oauthTokenSecret = data.oauth_token_secret;
    // alert(oauthToken,oauthTokenSecret);
  }
};

export default TwitterButton;
