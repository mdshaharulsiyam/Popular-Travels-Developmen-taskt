import React, { useEffect, useState } from 'react'
import SelectOption from '../../ui/SelectOption/SelectOption'

const SeatOptions = () => {
    const [seatData, setSeatData] = useState([])
    useEffect(() => {
        fetch('https://popular-travels-developmen-task.vercel.app/seat')
            .then((res) => res.json())
            .then((data) => setSeatData(data))
    }, [])
    return (
        <div>
            <SelectOption name='Pasenger' data={seatData} placeHoler={'Pasengers'} />
        </div>
    )
}

export default SeatOptions