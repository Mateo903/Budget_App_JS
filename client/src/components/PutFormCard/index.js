import React, {useState} from 'react'
import {formatDateInput} from '../../Constants'
import './style.css'




const PutFormCard = ({prevConcept, prevAmount,prevDate,toRecordCard, sendPutForm, id}) => {


  
  const [record, setRecord] = useState({
    concept:prevConcept,
    date: formatDateInput(prevDate),
    amount:prevAmount,
    type:1, //type: 1 means income, type: -1 means expenses
  })

  const {concept, date, amount, type} = record //deconstructoring

  const handleChange = e => {
    const {name, value} = e.target;
    setRecord(prevState => ({
      ...prevState,
      [name]: value
    }))

    console.log(prevDate,'and', date)
   
  }


  const handleSubmit = (e) =>{
    
    e.preventDefault()
  }

 

  return (
    <form onSubmit={e => handleSubmit(e)} className='putform-container'>
      <div className='space'></div>
      <div className='fields-container'>
        <div className='concept-date-container'>
          <input  className='concept-field'
                  maxLength='15'
                  name='concept'
                  onChange={handleChange} 
                  placeholder='concepto' 
                  type='text' 
                  value={concept}        
          />
          <input  className='date-field'
                  name='date'
                  onChange={handleChange} 
                  type='date' 
                  value={date}        
          />
        </div>
        
        
        <div className='amount-container'>
          {type<0 ? <h1>-$</h1> : <h1>$</h1>} 
          <input  className='amount-field' 
                  name='amount' 
                  onChange={handleChange} 
                  placeholder='monto' 
                  type='number' 
                  value={amount!==0 ? Math.abs(amount): ''} 
          />
        </div>

      </div>
      <div className='buttons-container'>
        <div onClick={toRecordCard} >
          <i className="fas fa-times cancel"></i>
        </div>
        <div type='submit' onClick={()=>sendPutForm(concept, date, amount,id)} >
          <i className="fas fa-check check"></i>
        </div>
      </div>

    </form>
  )
}

export default PutFormCard
