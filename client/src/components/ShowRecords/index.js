import React, {useState, useEffect} from 'react'
import {APIURL} from '../../Constants'
import RecordCard from '../RecordCard'
import PutFormCard from '../PutFormCard'
import axios from 'axios'


// SET ARRAY FOR SHOW
const settingArray = (array) => {
    return array.map(e => ({...e, isEdit:false}))
}


const ShowRecords = ({ update, url='', type, putfromlast=()=>{}}) => {
  const [accessAPI, setAccessAPI] = useState({ type: type || 'GET', url: url || APIURL+'/records/' });
  const [bodyData, setbodyData] = useState({})
  const [dataAPI, setDataAPI] = useState([])



   const reqAPI = async() =>{

    const req = await axios({
        method: accessAPI.type, 
        url: accessAPI.type === 'GET' ? url : accessAPI.url, 
        data: bodyData
      })
   

    if (accessAPI.type === 'GET'){
      setDataAPI(settingArray(req.data))
      
    }else{
      setAccessAPI({ type: 'GET', url: url })
      putfromlast()
    }

  }

  useEffect(()=>{
    
    reqAPI()

  },[accessAPI.type, bodyData, update, url])


  const editRecord = (id, flag) => {
   setDataAPI(dataAPI.map(e => {
     if (e.id !== id) return  e;
     return {...e, isEdit: flag}
    }))
  }

  const handlePut = (newConcept, newDate, newAmount, id=this.id) => {
    setAccessAPI({ type: 'PUT', url: `${APIURL}/records/${id}` })


    setbodyData({
      concept:newConcept,
      date: newDate,
      amount: newAmount,
      id:id
    })

  }

  const handleDelete = (id) => {
    setAccessAPI({ type: 'DELETE', url: `${APIURL}/records/${id}` })
  }




  return (
    <div>
      {dataAPI.map(e => {
        return  (  
          e.isEdit ?
            <PutFormCard    
              prevConcept={e.concept} 
              prevDate={e.date} 
              prevAmount={e.amount} 
              key={e.id} 
              toRecordCard={() => editRecord(e.id, false)}
              id={e.id}
              sendPutForm = {handlePut}
            />                             
          :   
            <RecordCard 
              concept={e.concept} 
              date={e.date} 
              amount={e.amount} 
              key={e.id} 
              toEdit={() => editRecord(e.id, true)}
              toDelete={()=>handleDelete(e.id)}
            /> 
              )
                
      })}

      
    </div>
  )
}

export default ShowRecords