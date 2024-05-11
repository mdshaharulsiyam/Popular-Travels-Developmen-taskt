import React, { Suspense, useEffect, useState } from 'react'
import TicketTable from '../../Components/Ticket/TicketTable/TicketTable'
import DepartureSelect from '../../Components/Ticket/DepartureSelect/DepartureSelect'
import ArrivalOption from '../../Components/Ticket/ArrivalOption/ArrivalOption'

const Ticket = () => {
    const [ticketData,setTicketData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/ticket')
        .then((res)=>res.json())
        .then((data)=>setTicketData(data))
    },[])
  return (
    <>
    <div className='container mx-auto mb-32 sm:grid sm:grid-cols-3 justify-between lg:grid-cols-5 gap-3'>
        <Suspense fallback={`loading`}>
            <DepartureSelect/>
        </Suspense>
        <Suspense fallback={`loading`}>
            <ArrivalOption/>
        </Suspense>
        <input type="date" className='outline-none border border-black' />
    </div>
    <TicketTable ticketData={ticketData}/>
    </>
  )
}

export default Ticket