import React, { Suspense, useEffect, useState } from 'react'
import TicketTable from '../../Components/Ticket/TicketTable/TicketTable'
import SelectOption from '../../Components/ui/SelectOption/SelectOption'
import DepartureSelect from '../../Components/Ticket/DepartureSelect/DepartureSelect'

const Ticket = () => {
    const [ticketData,setTicketData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/ticket')
        .then((res)=>res.json())
        .then((data)=>setTicketData(data))
    },[])
  return (
    <>
    <div className='container mx-auto mb-32'>
        <Suspense fallback={`loading`}>
            <DepartureSelect/>
        </Suspense>
    </div>
    <TicketTable ticketData={ticketData}/>
    </>
  )
}

export default Ticket