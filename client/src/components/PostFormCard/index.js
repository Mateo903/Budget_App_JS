import React, {useState, useEffect} from 'react'
import {formatDateInput, APIURL} from '../../Constants'
import './style.css'

import axios from 'axios'




const PostFormCard = (props) => {

  const [accessAPI, setAccessAPI] = useState({ type: 'GET', url: `${APIURL}/records/` });
  const [bodyData, setbodyData] = useState({});

  const [record, setRecord] = useState({
    concept:'',
    date:'',
    amount:0,
    type:1,
  })

  const {concept, date, amount, type} = record


  const reqAPI = async() =>{

    await axios({method: accessAPI.type, url: accessAPI.url, data: bodyData})

    if (accessAPI.type === 'POST') {
      props.sendForm()
    }

  }


  

  const handleChange = e => {
    const {name, value} = e.target;
    setRecord(prevState => ({
      ...prevState,
      [name]: value
    }))
  }


  useEffect( () => {
    setRecord(prevState => ({
      ...prevState,
      date: formatDateInput(new Date())
    }))

    reqAPI()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[accessAPI.type, accessAPI.url, bodyData])

  const handleSubmit = (e) =>{
    
    e.preventDefault()
  }

  const readForm = (newConcept,newDate,newAmount) => {

    setAccessAPI({type: 'POST', url:`${APIURL}/records/`})

    setbodyData({
      concept:newConcept,
      date:newDate,
      amount: newAmount,
    })
  }


  return (
    <form onSubmit={e => handleSubmit(e)} className='form-container'>
      <div className='space'></div>
      <div className='fields-container'>
        <div className='concept-date-container'>
          <input  className='concept-field'  
                  maxLength='39' 
                  name='concept' 
                  onChange={handleChange} 
                  placeholder='concepto' 
                  type='text'
           />
          <input  className='date-field' 
                  name='date' 
                  onChange={handleChange} 
                  type='date' 
                  value={date}   
          />

        </div>
        
        <div className='amount-container'>
          <select value={type} onChange={handleChange} name="type">

            <option value={1}>ingreso</option>

            <option value={-1}>egreso</option>
          </select> 

          <input  className='amount-field' 
                  name='amount' 
                  onChange={handleChange} 
                  placeholder='monto' 
                  type='number'  
           />
        </div>
      </div>
      <div className='buttons-container'>
        <div  className='check' 
              onClick={()=>readForm(concept, date, (amount*type))}
              type='submit' 
        >
          <i className="fas fa-plus add"></i>
        </div>
      </div>

    </form>
  )
}

export default PostFormCard
