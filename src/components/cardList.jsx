import axios from 'axios';
import Card from "./card"
import { useState, useEffect } from 'react';

const url = "https://mock-backend-for-interns.rahulyadav45.repl.co/users"
const CardList = () => {
const [data, setData] = useState([]);

useEffect(() => {
  (async () => {
    try {
      const response = await axios.get(url);
      console.log(response);
      setData(response.data.users);
    }catch(error){
      console.log(error);
    }
  })()
  },[])

  

  return(
    <>
    {data.map((i) => (
      <Card id={i.id} name={i.name} intro={i.about} />
    ))}
    </>
  )
}

export default CardList;