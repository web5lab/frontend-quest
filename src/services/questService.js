


const verifyTask = async (questId,task) => {
    const obj = {
      questId: questId,
      task: task,
    };
    const response = await fetch("https://cryptotool.in/quest/completeTask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
      body: JSON.stringify(obj),
    });
   const data = await response.json()
   
   if(data.error){
    alert(data.data);
  };
  return data;
}
  export default verifyTask;