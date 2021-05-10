import React, {useState} from 'react'
import {APIURL} from '../../Constants'
import { useHistory } from 'react-router'
import Balance from '../../components/Balance'
import PostFormCard from '../../components/PostFormCard'
import ShowRecords from '../../components/ShowRecords'
import './style.css'
import Navbar from '../../components/Navbar'

const Home = () => {
  const [consulta, setConsulta] = useState({type:'GET', url:`${APIURL}/lasttenrecords/`, update: true})
  const history = useHistory()

  const handleUpdate = () => {
    setConsulta(({type:'GET', url: `${APIURL}/lasttenrecords/`, update: !consulta.update}))
  }

  return (
    <div className='home'>
      <Navbar/>
      <div className='balance-container' >
        <label>BALANCE</label>
        <Balance update={consulta.update}/>
      </div>
      <PostFormCard sendForm={handleUpdate}/>
      <button onClick={() => history.push('/allrecords')}>Todos los registros</button>
      <label>Ultimos 10 registros</label>
      <div>
      </div>
      <div className='list-container'>
        <ShowRecords  url={consulta.url} type={consulta.type} sendPut={handleUpdate}  update={consulta.update}/>
      </div>
    </div>
  )
}

export default Home
