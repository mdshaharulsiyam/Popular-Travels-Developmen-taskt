import React, { useEffect, useState } from 'react'
import SelectOption from '../../ui/SelectOption/SelectOption'

const DepartureSelect = () => {
    const [departureData, setdepartureData] = useState([])
    useEffect(() => {
        fetch('https://popular-travels-developmen-task.vercel.app/departure')
            .then((res) => res.json())
            .then((data) => setdepartureData(data[0]))
    }, [])
    return (
        <div>
            <SelectOption name='departure' data={departureData} placeHoler={'departure'} />
        </div>
    )
}

export default DepartureSelect