import { useToast } from "@chakra-ui/react";
import verifyTask from "./questService";

const DiscordAuth = async (questId,task) => {
  const toast = useToast();
  toast({
    title: "please wait",
    position: "top",
    description: "Please wait we are processing your task",
    status: "success",
    duration: 1500,
    isClosable: true,
  })
    console.log("working ");
    const key = await fetch(`http://localhost:4000/user/discord/${localStorage.getItem("jwtToken")}`).then(response => response.json())
    .then(data => {
      console.log("token",data)
      return data})
      if(key.error){
       return verifyTask(questId,task);
      }
    try {
        window.location.href = `${key.data}&state=${JSON.stringify(localStorage.getItem("jwtToken"))}`;
    } catch (err) {
      console.error('Error here', err);
    }
  };

  export default DiscordAuth;