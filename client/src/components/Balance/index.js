import React, { useEffect, useState } from 'react'
import {formatAmount} from '../../Constants'
import axios from 'axios'



const Balance = (props) => {
  const [accessAPI, setAccessAPI] = useState({ type:'GET', url: 'http://192.168.0.115:9000/api/records' });
  const [dataAPI, setDataAPI] = useState([]);

  const reqAPI = async() =>{
    const req = await axios({method: accessAPI.type, url: accessAPI.url })

    setDataAPI(req.data)

  }

  const addBalance = (array) => {
    let balance= 0
    array.forEach(e => {
      balance += e.amount
    });
    return formatAmount(balance,2);
  }

  useEffect(()=>{
    reqAPI()

  }, [])

  return (
    <div>
      {addBalance(dataAPI)}
    </div>
  )
}

export default Balance
