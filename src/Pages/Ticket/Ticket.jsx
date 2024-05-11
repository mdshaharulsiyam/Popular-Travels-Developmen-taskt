import React, { useEffect, useState } from 'react'
import TicketTable from '../../Components/Ticket/TicketTable/TicketTable'

const Ticket = () => {
    const [ticketData,setTicketData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/ticket')
        .then((res)=>res.json())
        .then((data)=>setTicketData(data))
    },[])
  return (
    <>
    <TicketTable ticketData={ticketData}/>
    </>
  )
}

export default Ticket