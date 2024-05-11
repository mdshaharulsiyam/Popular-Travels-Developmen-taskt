import React from 'react'

const TicketTable = ({ ticketData }) => {
    return (
        <div className="overflow-x-auto w-full container mx-auto">
            <table className="min-w-[1040px] w-full">
                {/* head */}
                <thead className='text-left'>
                    <tr className='bg-[#E5E7EB] px-6'>
                        <th className='uppercase text-gray-600 pl-2 py-3'>Flight</th>
                        <th className='uppercase text-gray-600 pl-2 py-3'>AirCraft</th>
                        <th className='uppercase text-gray-600 pl-2 py-3'>Class</th>
                        <th className='uppercase text-gray-600 pl-2 py-3'>Fare</th>
                        <th className='uppercase text-gray-600 pl-2 py-3'>Route</th>
                        <th className='uppercase text-gray-600 pl-2 py-3'>Departure</th>
                        <th className='uppercase text-gray-600 pl-2 py-3'>Arrival</th>
                        <th className='uppercase text-gray-600 pl-2 py-3'>Duration</th>
                        <th className='uppercase text-gray-600 pl-2 py-3'>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {ticketData?.map((item, index) => {
                        return (
                            <tr key={index} className={`${index % 2 !== 0 ? 'bg-[#E5E7EB] ' : 'bg-[#F3F4F6]'}`}>
                                <td className='pl-2 py-2'>
                                    {item?.itineraries[0]?.segments[0]?.marketingCarrier} {item?.itineraries[0]?.segments[0]?.flightNumber} <br />
                                    {item?.itineraries[0]?.segments[1]?.carrierCode} {item?.itineraries[0]?.segments[1]?.aircraft}
                                </td>
                                <td className='pl-2 py-2'>
                                    {item?.itineraries[0]?.segments[0]?.aircraft} <br />
                                    {item?.itineraries[0]?.segments[1]?.aircraft}
                                </td>
                                <td className='pl-2 py-2'>{item?.class[0][0]} <br />
                                    {item?.class[0][1]}
                                </td>
                                <td className='pl-2 py-2'>{item?.fareBasis[0][0]} <br />
                                    {item?.fareBasis[0][1]}
                                </td>
                                <td className='pl-2 py-2'>
                                    {item?.itineraries[0]?.segments[0]?.departure?.iataCode}-{item?.itineraries[0]?.segments[0]?.arrival?.iataCode} <br />
                                    {item?.itineraries[0]?.segments[1]?.departure?.iataCode}-{item?.itineraries[0]?.segments[1]?.arrival?.iataCode}
                                </td >
                                <td className='pl-2 py-2'>
                                    {item?.itineraries[0]?.segments[0]?.departure?.at} <br />
                                    {item?.itineraries[0]?.segments[1]?.departure?.at}
                                </td>
                                <td className='pl-2 py-2'>
                                    {item?.itineraries[0]?.segments[0]?.arrival?.at} <br />
                                    {item?.itineraries[0]?.segments[1]?.arrival?.at}
                                </td>
                                <td className='pl-2 py-2'>
                                    {item?.itineraries[0]?.duration}
                                </td>
                                <td className='pl-2 py-2'>
                                    {item?.price} <br />
                                    <button className='text-xs uppercase bg-[#312e81] px-2 py-[2px] rounded text-white'>select</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </div>
    )
}

export default TicketTable