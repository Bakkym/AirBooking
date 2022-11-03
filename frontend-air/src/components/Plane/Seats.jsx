import React from "react"

export default function Seats(props) {
    const styles = {
        backgroundColor: props.status ? "transparent" : "#222222",
        color: props.status ? "black" : "#fff",
    }
    
    return (
        
        <div
            style={styles} 
            className="box"
            onClick={props.toggle}
        >
            <p className="chair">{`${props.category}`}</p>
            <p className="chair">{`${props.chair}`}</p>
        </div>
    )
}