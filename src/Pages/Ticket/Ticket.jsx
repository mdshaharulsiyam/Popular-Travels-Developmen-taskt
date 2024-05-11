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
        const fetchData = async () => {
            const response = await toast.promise(
                fetch(`https://popular-travels-developmen-task.vercel.app/ticket?departure=${filterOptions?.departure}&arrival=${filterOptions?.arrival}&Pasenger=${filterOptions?.Pasenger}&date=${filterOptions?.date}`)
                    .then((res) => res.json())
                    .then((data) => setTicketData(data)),
                {
                    pending: 'please wait loading ☺',
                    // success: 'Promise resolved 👌',
                    error: 'somthing wrong🤯'
                }
            );
            console.log(response)
        }
        fetchData()

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
        for (const key in filterOption) {
            if (filterOption[key] === '') {
                console.log('error')
                toast.error(`please select (${key})`, {
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
        }
        if (departure === arrival) {
            toast.error(`departure & arrival cannot be same`, {
                position: "top-center",
                autoClose: 2000,
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
        setFilterOptions(filterOption)
    }
    console.log(filterOptions)
    return (
        <>
            <form onSubmit={HandelSubmit} className='container mx-auto py-10 sm:grid sm:grid-cols-3 justify-between lg:grid-cols-5 gap-3 flex flex-col '>
                <Suspense fallback={`loading`}>
                    <DepartureSelect />
                </Suspense>
                <Suspense fallback={`loading`}>
                    <ArrivalOption />
                </Suspense>
                <Suspense fallback={`loading`}>
                    <SeatOptions />
                </Suspense>
                <input type="date" name='date' className='outline-none border border-black py-2' />
                <button className='bg-[#312E81] rounded text-white font-bold py-2'>search</button>
            </form>
            <TicketTable ticketData={ticketData} />
            <ToastContainer
                position="bottom-center"
                autoClose={3000}
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