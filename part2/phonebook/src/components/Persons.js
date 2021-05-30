import React from 'react'

const Persons = ({ personToShow }) => {
    return (
        <>
            <h2>Numbers</h2>
            {personToShow.map((person, i) => <div key={i}>{person.name}  {person.number}</div>)}
        </>
    )
}

export default Persons