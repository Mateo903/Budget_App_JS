import React from 'react'
import './style.css'

const RecordCard = ({concept, date, amount, toDelete, toEdit}) => {
  
  const classNameCard = am => {
    return am < 0 ? 'card-container gasto' : 'card-container';
  }

  return (
    <div className={classNameCard(amount)}>
      <div className='space-container'></div>
      <div className='information-container'>
        <div className='concept-container'>
          <h1>{concept}</h1>
          <p>{date}</p>
        </div>
        <div className='mount-container'>
          <h1>{amount}</h1>
        </div>
      </div>
      <div className='buttons-container'>
        <div onClick={toEdit}></div>
        <div onClick={toDelete}></div>
      </div>
    </div>
  )
}

export default RecordCard
