import React, {useState} from 'react'
import { useHistory } from 'react-router'
import {APIURL} from '../../Constants'
import ShowRecords from '../../components/ShowRecords'
import './style.css'

const AllRecords = () => {
  const [consulta, setConsulta] = useState(`${APIURL}/records`)
  const history = useHistory()

  const handleChange = (e) => {
    setConsulta(e.target.value)
  }


  return (
    <div className='container'>
      <h1>Listado de todos los records</h1>
      <button onClick={()=>history.push('/')}>VOLVER</button>
      <div>
      <select value={consulta} onChange={e => handleChange(e)} name="type">

        <option value={`${APIURL}/records/`}>Todos</option>
        
        <option value={`${APIURL}/records/expenses/`}>Egresos</option>

        <option value={`${APIURL}/records/incomes/`}>Ingresos</option>

      </select>
      </div>
      <ShowRecords url={consulta} />
    </div>
  )
}


export default AllRecords
