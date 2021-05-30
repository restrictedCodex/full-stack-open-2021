import React from 'react'

const Filter = ({ filterContent }) => {
    return (
        <>
            <h2>Phonebook</h2>
            <div>
                filter shown with <input onChange={filterContent} />
            </div>
        </>
    )
}

export default Filter