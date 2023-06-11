import { CONSTS } from "../Consts";



const verifyTask = async (questId,task,toast) => {
    const obj = {
      questId: questId,
      task: task,
    };
    console.log({...obj})

    const response = await fetch(`${CONSTS.SERVER_URL}/quest/completeTask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
      body: JSON.stringify(obj),
    });
   const data = await response.json()
   console.log(data);
   if(data.error){
    toast({
      title: data.data,
      position: "top",
      description: "",
      status: "warning",
      duration: 3000,
      isClosable: true,
    });
  };
  if(typeof(data)=="string"){
    toast({
      title: data,
      position: "top",
      description: "",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    return {data,status:0,error:true}
  }
  return data;
}
  export default verifyTask;