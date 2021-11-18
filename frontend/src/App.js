import React, { useState,useEffect} from 'react';
import axios from 'axios';

export const App = () => {

  // const list = [
  // {"id":1,"title":"task1","body":"We’ll start by configuring a React app as our front-end. First open up a new command\r\nline console so there are now two consoles open. This is important. We need our\r\nexisting Todo back-end from the last chapter to still be running on the local server.\r\nAnd we will use the second console to create and then run our React front-end on\r\na separate local port. This is how we locally mimic what a production setting of a\r\ndedicated and deployed front-end/back-end would look like."}
  // ,{"id":2,"title":"task2","body":"We’ll start by configuring a React app as our front-end. First open up a new command\r\nline console so there are now two consoles open. This is important. We need our\r\nexisting Todo back-end from the last chapter to still be running on the local server.\r\nAnd we will use the second console to create and then run our React front-end on\r\na separate local port. This is how we locally mimic what a production setting of a\r\ndedicated and deployed front-end/back-end would look like."},
  // {"id":3,"title":"task3","body":"We’ll start by configuring a React app as our front-end. First open up a new command\r\nline console so there are now two consoles open. This is important. We need our\r\nexisting Todo back-end from the last chapter to still be running on the local server.\r\nAnd we will use the second console to create and then run our React front-end on\r\na separate local port. This is how we locally mimic what a production setting of a\r\ndedicated and deployed front-end/back-end would look like."},
  // {"id":4,"title":"task4","body":"We’ll start by configuring a React app as our front-end. First open up a new command\r\nline console so there are now two consoles open. This is important. We need our\r\nexisting Todo back-end from the last chapter to still be running on the local server.\r\nAnd we will use the second console to create and then run our React front-end on\r\na separate local port. This is how we locally mimic what a production setting of a\r\ndedicated and deployed front-end/back-end would look like."}
  //  ]

  const [data,setData]=useState({})

  useEffect(() => {
    gettodos();
  },[])


  const gettodos=()=>{
    axios.get('http://127.0.0.1:8000/api/')
          .then((res)=>{
            setData(res.data);
            console.log(data);  
          })
          .catch((err)=>{
            console.log(err)
          });  
  };
  return (
    <div>
      {data.map((task)=>(
          <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.body}</p>
          </div>
      ))}
    </div>
  );  
};


export default App;
