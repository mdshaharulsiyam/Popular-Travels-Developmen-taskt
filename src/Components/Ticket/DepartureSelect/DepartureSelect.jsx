import React, { useEffect, useState } from 'react'
import SelectOption from '../../ui/SelectOption/SelectOption'

const DepartureSelect = () => {
    const [departureData, setdepartureData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/departure')
            .then((res) => res.json())
            .then((data) => setdepartureData(data[0]))
    }, [])
    return (
        <div>
            <SelectOption data={departureData} placeHoler={'departure'} />
        </div>
    )
}

export default DepartureSelect