import React, { Suspense, useEffect, useState } from 'react'
import TicketTable from '../../Components/Ticket/TicketTable/TicketTable'
import DepartureSelect from '../../Components/Ticket/DepartureSelect/DepartureSelect'
import ArrivalOption from '../../Components/Ticket/ArrivalOption/ArrivalOption'
import SeatOptions from '../../Components/Ticket/SeatOptions/SeatOptions'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Ticket = () => {
    const [filterOptions, setFilterOptions] = useState({})
    const [ticketData, setTicketData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/ticket?departure=${filterOptions?.departure}&arrival=${filterOptions?.arrival}&Pasenger=${filterOptions?.Pasenger}&date=${filterOptions?.date}`)
            .then((res) => res.json())
            .then((data) => setTicketData(data))
    }, [filterOptions?.departure, filterOptions?.arrival, filterOptions?.Pasenger, filterOptions?.date])
    const HandelSubmit = (e) => {
        e.preventDefault()
        const Pasenger = e.target.Pasenger.value;
        const departure = e.target.departure.value;
        const arrival = e.target.arrival.value;
        const date = e.target.date.value;
        const filterOption = {
            departure, arrival, Pasenger, date
        }
        // for (const key in filterOption) {
        //     if (filterOption[key] === '') {
        //         console.log('error')
        //         toast.error(`please select (${key})`, {
        //             position: "top-center",
        //             autoClose: 5000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //             theme: "light",
        //             transition: Bounce,
        //         });
        //         return
        //     }
        // }
        if (departure === arrival) {
            toast.error(`departure & arrival cannot be same`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            return
        }
        console.log(filterOption)
        setFilterOptions(filterOption)
    }
    return (
        <>
            <form onSubmit={HandelSubmit} className='container mx-auto py-10 sm:grid sm:grid-cols-3 justify-between lg:grid-cols-5 gap-3'>
                <Suspense fallback={`loading`}>
                    <DepartureSelect />
                </Suspense>
                <Suspense fallback={`loading`}>
                    <ArrivalOption />
                </Suspense>
                <Suspense fallback={`loading`}>
                    <SeatOptions />
                </Suspense>
                <input type="date" name='date' className='outline-none border border-black' />
                <button className='bg-[#312E81] rounded text-white font-bold'>search</button>
            </form>
            <TicketTable ticketData={ticketData} />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default Ticket