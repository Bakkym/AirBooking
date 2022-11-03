import React from "react"
import Seats from "./Seats"
import axios from "axios"
import boxes from "./boxes"
import "./Plane.css";

export default function Plane() {
    const [seats, setSeats] = React.useState([])

    React.useEffect(() => {
        fetch("http://localhost:3001/seats")
            .then(res => res.json())
            .then(data => setSeats(data))
            
    }, [])
    // console.log(seats)
    function toggle(id) {
        setSeats(prevSeats => {
            return prevSeats.map((seat) => {
                return seat.seat_id === id ? {...seat, status: !seat.status} : seat
            })
        })
    }
    
    const seatElements = seats.map(seat => (
        <Seats
            key={seat.seat_id}
            chair={seat.seat_id}
            status={seat.status}
            category={seat.category}
            toggle={() => toggle(seat.seat_id)}
        />
    ))
    
    return (
        <main className="plane">
            {seatElements}
        </main>
    )
}
