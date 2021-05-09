import React from 'react'
import {formatAmount, formatDate} from '../../Constants'

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
          <p>{formatDate(date)}</p>
        </div>
        <div className='mount-container'>
          <h1>{formatAmount(amount)}</h1>
        </div>
      </div>
      <div className='buttons-container'>
        <div onClick={toEdit}><i className="far fa-edit edit"></i></div>
        <div onClick={toDelete}><i className="far fa-trash-alt trash"></i></div>
      </div>
    </div>
  )
}

export default RecordCard
